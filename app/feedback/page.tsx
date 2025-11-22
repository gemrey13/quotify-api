"use client";

import { useState } from 'react';
import { Sparkles, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'feedback' as 'feedback' | 'quote-request',
    message: ''
  });

  function submitFeedback(data: typeof formData) {
    // Simulate sending data to an API endpoint
    console.log('Submitting feedback:', data);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitFeedback(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', type: 'feedback', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-linear-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl mb-4">Feedback & Quote Requests</h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Help us improve Quotify by sharing your thoughts or suggesting new quotes
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          
          {submitted && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
              <div>
                <h3 className="text-green-900 mb-1">Thank you for your submission!</h3>
                <p className="text-green-700">We appreciate your feedback and will review it soon.</p>
              </div>
            </div>
          )}

          <Card>
            <CardHeader>
              <h2 className="text-3xl">Submit Your Feedback</h2>
              <p className="text-slate-600 mt-2">
                Whether you have suggestions for improvement, want to report an issue, or would like to request a specific quote to be added to our collection, we're here to listen.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Submission Type</Label>
                  <select
                    id="type"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as 'feedback' | 'quote-request' })}
                  >
                    <option value="feedback">General Feedback</option>
                    <option value="quote-request">Quote Request</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    {formData.type === 'quote-request' ? 'Quote Details' : 'Your Message'}
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      formData.type === 'quote-request'
                        ? 'Please provide the quote text, author, and category (if known). Example:\n\n"Quote text here"\n- Author Name\nCategory: Motivation'
                        : 'Share your thoughts, suggestions, or report any issues you\'ve encountered...'
                    }
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit {formData.type === 'quote-request' ? 'Quote Request' : 'Feedback'}
                </Button>

              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl mb-2 text-slate-900">💡 Feedback Guidelines</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Be specific about what you'd like to see improved</li>
                  <li>• Include examples when possible</li>
                  <li>• Let us know which features you love</li>
                  <li>• Report any bugs or issues you encounter</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-xl mb-2 text-slate-900">📝 Quote Requests</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Include the full quote text</li>
                  <li>• Provide the author's name</li>
                  <li>• Suggest a relevant category</li>
                  <li>• Verify the quote's authenticity if possible</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Privacy Notice */}
          <Card className="mt-8 bg-slate-100">
            <CardContent className="p-6">
              <h3 className="mb-2 text-slate-900">Privacy Notice</h3>
              <p className="text-slate-600 text-sm">
                Your feedback is important to us. We only use the information you provide to respond to your submission and improve our service. We do not share your personal information with third parties or use it for marketing purposes.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
export default Feedback;