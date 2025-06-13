import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Calculator, Copy, DollarSign, Percent, Calendar, ChevronDown, ChevronUp, TrendingUp } from "lucide-react";

interface AmortizationPayment {
  period: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface CalculationResults {
  periodicPayment: number;
  totalPayments: number;
  totalInterest: number;
  amortizationSchedule: AmortizationPayment[];
}

export default function Calculators() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("repayment");

  // Repayment Calculator State
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(25);
  const [loanTermMonths, setLoanTermMonths] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [displayFrequency, setDisplayFrequency] = useState("monthly");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Parse URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);

  // Input validation
  const validateInputs = () => {
    const newErrors: { [key: string]: string } = {};

    if (loanAmount <= 0 || loanAmount > 50000000) {
      newErrors.loanAmount = "Loan amount must be between $1 and $50,000,000";
    }

    if (interestRate <= 0 || interestRate > 30) {
      newErrors.interestRate = "Interest rate must be between 0.1% and 30%";
    }

    const totalTermMonths = loanTermYears * 12 + loanTermMonths;
    if (totalTermMonths <= 0 || totalTermMonths > 600) {
      newErrors.term = "Loan term must be between 1 month and 50 years";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Calculate repayment
  const calculateRepayment = (): CalculationResults | null => {
    if (!validateInputs()) return null;

    const totalTermMonths = loanTermYears * 12 + loanTermMonths;
    const periodsPerYear = paymentFrequency === "weekly" ? 52 :
                          paymentFrequency === "fortnightly" ? 26 : 12;
    const totalPeriods = Math.round((totalTermMonths / 12) * periodsPerYear);
    const periodicRate = (interestRate / 100) / periodsPerYear;

    // Calculate periodic payment using PMT formula
    const periodicPayment = periodicRate === 0 ?
      loanAmount / totalPeriods :
      (loanAmount * periodicRate * Math.pow(1 + periodicRate, totalPeriods)) /
      (Math.pow(1 + periodicRate, totalPeriods) - 1);

    const totalPayments = periodicPayment * totalPeriods;
    const totalInterest = totalPayments - loanAmount;

    // Generate amortization schedule
    const schedule: AmortizationPayment[] = [];
    let remainingBalance = loanAmount;

    for (let period = 1; period <= totalPeriods; period++) {
      const interestPayment = remainingBalance * periodicRate;
      const principalPayment = periodicPayment - interestPayment;
      remainingBalance = Math.max(0, remainingBalance - principalPayment);

      schedule.push({
        period,
        payment: periodicPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: remainingBalance
      });

      if (remainingBalance <= 0.01) break;
    }

    return {
      periodicPayment,
      totalPayments,
      totalInterest,
      amortizationSchedule: schedule
    };
  };

  // Recalculate when inputs change
  useEffect(() => {
    const newResults = calculateRepayment();
    setResults(newResults);
  }, [loanAmount, interestRate, loanTermYears, loanTermMonths, paymentFrequency]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NZ', {
      style: 'currency',
      currency: 'NZD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format percentage
  const formatPercent = (rate: number) => {
    return `${rate.toFixed(2)}%`;
  };

  // Copy to clipboard with feedback
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Could add a toast notification here in the future
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Get frequency multiplier for display conversion
  const getFrequencyMultiplier = (from: string, to: string) => {
    const multipliers: { [key: string]: number } = {
      weekly: 52,
      fortnightly: 26,
      monthly: 12
    };
    return multipliers[from] / multipliers[to];
  };

  // Convert payment frequency for display
  const convertPaymentForDisplay = (amount: number, fromFreq: string, toFreq: string) => {
    if (fromFreq === toFreq) return amount;
    return amount * getFrequencyMultiplier(fromFreq, toFreq);
  };

  // Filter amortization schedule for display frequency
  const getFilteredSchedule = () => {
    if (!results) return [];

    if (paymentFrequency === displayFrequency) {
      return results.amortizationSchedule;
    }

    const multiplier = getFrequencyMultiplier(paymentFrequency, displayFrequency);
    const filtered: AmortizationPayment[] = [];

    for (let i = 0; i < results.amortizationSchedule.length; i += Math.round(1 / multiplier)) {
      const period = results.amortizationSchedule[i];
      if (period) {
        filtered.push({
          ...period,
          period: Math.floor(i * multiplier) + 1,
          payment: period.payment / multiplier,
          principal: period.principal / multiplier,
          interest: period.interest / multiplier
        });
      }
    }

    return filtered;
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Financial Calculators</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Powerful tools to help you make informed financial decisions and plan for your future.
        </p>
      </div>

      {/* Calculator Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-7xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="repayment" className="flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Repayment Calculator
          </TabsTrigger>
          <TabsTrigger value="affordability" disabled className="flex items-center gap-2 opacity-50">
            <TrendingUp className="w-4 h-4" />
            Affordability (Coming Soon)
          </TabsTrigger>
          <TabsTrigger value="comparison" disabled className="flex items-center gap-2 opacity-50">
            <DollarSign className="w-4 h-4" />
            Loan Comparison (Coming Soon)
          </TabsTrigger>
        </TabsList>

        {/* Repayment Calculator */}
        <TabsContent value="repayment" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Input Form */}
            <Card className="lg:col-span-1 border-l-4 border-l-yellow-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-yellow-500" />
                  Loan Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Loan Amount */}
                <div className="space-y-3">
                  <Label htmlFor="loanAmount" className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Loan Amount
                  </Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className={`transition-all duration-200 focus:ring-2 focus:ring-yellow-400 ${errors.loanAmount ? "border-red-500" : ""}`}
                  />
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    max={2000000}
                    min={10000}
                    step={10000}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$10K</span>
                    <span className="font-medium">{formatCurrency(loanAmount)}</span>
                    <span>$2M</span>
                  </div>
                  {errors.loanAmount && (
                    <p className="text-sm text-red-500">{errors.loanAmount}</p>
                  )}
                </div>

                {/* Interest Rate */}
                <div className="space-y-3">
                  <Label htmlFor="interestRate" className="flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Interest Rate (Annual)
                  </Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className={`transition-all duration-200 focus:ring-2 focus:ring-yellow-400 ${errors.interestRate ? "border-red-500" : ""}`}
                  />
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    max={15}
                    min={1}
                    step={0.01}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1%</span>
                    <span className="font-medium">{formatPercent(interestRate)}</span>
                    <span>15%</span>
                  </div>
                  {errors.interestRate && (
                    <p className="text-sm text-red-500">{errors.interestRate}</p>
                  )}
                </div>

                {/* Loan Term */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Loan Term
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="termYears" className="text-sm">Years</Label>
                      <Input
                        id="termYears"
                        type="number"
                        value={loanTermYears}
                        onChange={(e) => setLoanTermYears(Number(e.target.value))}
                        className={`transition-all duration-200 focus:ring-2 focus:ring-yellow-400 ${errors.term ? "border-red-500" : ""}`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="termMonths" className="text-sm">Months</Label>
                      <Input
                        id="termMonths"
                        type="number"
                        value={loanTermMonths}
                        onChange={(e) => setLoanTermMonths(Number(e.target.value))}
                        max={11}
                        className={`transition-all duration-200 focus:ring-2 focus:ring-yellow-400 ${errors.term ? "border-red-500" : ""}`}
                      />
                    </div>
                  </div>
                  {errors.term && (
                    <p className="text-sm text-red-500">{errors.term}</p>
                  )}
                </div>

                {/* Payment Frequency */}
                <div className="space-y-3">
                  <Label>Payment Frequency</Label>
                  <Select value={paymentFrequency} onValueChange={setPaymentFrequency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="fortnightly">Fortnightly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="lg:col-span-2 border-l-4 border-l-yellow-400">
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
              </CardHeader>
              <CardContent>
                {results ? (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    {/* Key Results */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-yellow-50 p-4 rounded-lg transition-all duration-200 hover:bg-yellow-100 hover:shadow-md">
                        <h3 className="font-semibold text-gray-700 mb-1">Periodic Payment</h3>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-bold text-yellow-600">
                            {formatCurrency(results.periodicPayment)}
                          </p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(results.periodicPayment.toString())}
                            className="p-1 h-auto"
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 capitalize">{paymentFrequency}</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-md">
                        <h3 className="font-semibold text-gray-700 mb-1">Total Payments</h3>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-bold text-gray-700">
                            {formatCurrency(results.totalPayments)}
                          </p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(results.totalPayments.toString())}
                            className="p-1 h-auto"
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg transition-all duration-200 hover:bg-red-100 hover:shadow-md">
                        <h3 className="font-semibold text-gray-700 mb-1">Total Interest</h3>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-bold text-red-600">
                            {formatCurrency(results.totalInterest)}
                          </p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(results.totalInterest.toString())}
                            className="p-1 h-auto"
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Payment Frequency Converter */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-700 mb-3">Payment Converter</h3>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-gray-600">Weekly</p>
                          <p className="font-bold text-blue-600">
                            {formatCurrency(convertPaymentForDisplay(results.periodicPayment, paymentFrequency, "weekly"))}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Fortnightly</p>
                          <p className="font-bold text-blue-600">
                            {formatCurrency(convertPaymentForDisplay(results.periodicPayment, paymentFrequency, "fortnightly"))}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Monthly</p>
                          <p className="font-bold text-blue-600">
                            {formatCurrency(convertPaymentForDisplay(results.periodicPayment, paymentFrequency, "monthly"))}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Amortization Schedule */}
                    <Collapsible open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full">
                          <span>Amortization Schedule</span>
                          {isScheduleOpen ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="space-y-4">
                          {/* Display Frequency Selector */}
                          <div className="flex items-center gap-4">
                            <Label>Display Frequency:</Label>
                            <Select value={displayFrequency} onValueChange={setDisplayFrequency}>
                              <SelectTrigger className="w-40">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="fortnightly">Fortnightly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Schedule Table */}
                          <div className="max-h-96 overflow-y-auto border rounded-lg">
                            <Table>
                              <TableHeader className="sticky top-0 bg-white">
                                <TableRow>
                                  <TableHead className="capitalize">
                                    {displayFrequency.slice(0, -2)} #
                                  </TableHead>
                                  <TableHead>Payment</TableHead>
                                  <TableHead>Principal</TableHead>
                                  <TableHead>Interest</TableHead>
                                  <TableHead>Balance</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {getFilteredSchedule().slice(0, 50).map((payment, index) => (
                                  <TableRow key={index}>
                                    <TableCell>{payment.period}</TableCell>
                                    <TableCell>{formatCurrency(payment.payment)}</TableCell>
                                    <TableCell>{formatCurrency(payment.principal)}</TableCell>
                                    <TableCell>{formatCurrency(payment.interest)}</TableCell>
                                    <TableCell>{formatCurrency(payment.balance)}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                            {getFilteredSchedule().length > 50 && (
                              <div className="p-4 text-center text-gray-500">
                                Showing first 50 payments of {getFilteredSchedule().length} total
                              </div>
                            )}
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Enter valid loan details to see calculations</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Coming Soon Tabs */}
        <TabsContent value="affordability" className="text-center py-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12">
              <TrendingUp className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Affordability Calculator</h2>
              <p className="text-gray-600 mb-6">
                Coming soon! This calculator will help you determine how much you can afford to borrow based on your income and expenses.
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                Notify Me When Ready
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="text-center py-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12">
              <DollarSign className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Loan Comparison</h2>
              <p className="text-gray-600 mb-6">
                Coming soon! Compare different loan options side by side to find the best deal for your situation.
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                Notify Me When Ready
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
