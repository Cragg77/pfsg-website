interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
  try {
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send email');
    }

    return {
      success: true,
      message: 'Email sent successfully',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}
