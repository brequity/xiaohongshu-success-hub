import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const GrowthStrategyForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Get URL parameters
  const searchParams = new URLSearchParams(location.search);
  const objective = searchParams.get('objective') || '';
  const budget = searchParams.get('budget') || '';

  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    contactNumber: "",
    information: "",
    marketingObjective: objective,
    budget: budget
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('growth_strategy_leads')
        .insert([{
          email: formData.email,
          company_name: formData.companyName,
          contact_number: formData.contactNumber,
          information: `Marketing Objective: ${formData.marketingObjective}\nBudget Range: ${formData.budget}\nAdditional Information: ${formData.information}`
        }]);

      if (error) throw error;

      toast({
        title: "Request submitted successfully!",
        description: "Our team will contact you within 24 hours with your customized growth strategy.",
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/xiaohongshu')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Xiaohongshu
          </button>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="mb-6 flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-jade" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Request!
            </h1>
            <p className="text-gray-600 mb-8">
              Our team will review your information and contact you within 24 hours with your customized growth strategy. We're excited to help you grow your business on Xiaohongshu!
            </p>
            <Button
              onClick={() => navigate('/xiaohongshu')}
              className="bg-coral hover:bg-coral-light"
            >
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/xiaohongshu')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Xiaohongshu
        </button>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Get Your Growth Strategy
          </h1>
          <p className="text-gray-600 mb-8">
            Please provide your details below and our team will create a customized growth strategy for your business.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="companyName">Company Name (Optional)</Label>
              <Input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="contactNumber">Contact Number *</Label>
              <Input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                required
                value={formData.contactNumber}
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="information">Further Information</Label>
              <Textarea
                id="information"
                name="information"
                value={formData.information}
                onChange={handleChange}
                placeholder="Some background about your business and requirements"
                className="mt-1 h-32"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-coral hover:bg-coral-light"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GrowthStrategyForm;