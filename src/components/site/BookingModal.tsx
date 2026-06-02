import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    objective: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    console.log("Submitting Intake Form Data:", formData);
    const submissionTime = new Date().toLocaleString();

    try {
      const clientHtml = `
        <div style="background-color: #0A0A0B; color: #F5F0E8; font-family: Arial, sans-serif; padding: 40px; border-top: 4px solid #C9A84C;">
          <div style="color: #C9A84C; font-size: 24px; font-weight: bold; letter-spacing: 0.2em; margin-bottom: 20px;">APEXFORM</div>
          <hr style="border: none; border-top: 1px solid rgba(201, 168, 76, 0.2); margin-bottom: 30px;" />
          <h1 style="font-size: 32px; font-weight: bold; margin-bottom: 20px;">Intake Received, ${formData.name}.</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #A1A1AA; margin-bottom: 30px;">
            Our clinical team has received your intake and will review your primary objective: <strong style="color: #C9A84C;">${formData.objective}</strong>. 
            Expect to hear from us within 24 hours to schedule your complimentary discovery call.
          </p>
          <a href="${window.location.origin}" style="display: inline-block; background-color: #C9A84C; color: #0A0A0B; padding: 16px 32px; text-decoration: none; font-weight: bold; border-radius: 4px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">
            Learn More About Your Protocol
          </a>
          <div style="margin-top: 40px; font-size: 12px; color: #52525B;">
            APEXFORM — Precision Longevity Medicine
          </div>
        </div>
      `;

      const teamPlain = `
New intake submission received
Name: ${formData.name}
Email: ${formData.email}
Health Objective: ${formData.objective}
Submitted at: ${submissionTime}

Respond within 24 hours per APEXFORM SLA
      `;

      // 1. Send confirmation to client
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          health_objective: formData.objective,
          submission_time: submissionTime,
          html_message: clientHtml,
          reply_to: "noreply@apexform.com"
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Send notification to team
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          health_objective: formData.objective,
          submission_time: submissionTime,
          message: teamPlain,
          reply_to: formData.email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitted(true);
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSending(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", objective: "" });
    setError(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[500px] bg-[#0A0A0B]/98 backdrop-blur-3xl border-white/5 p-0 overflow-hidden rounded-none shadow-[0_0_100px_-20px_oklch(0.75_0.13_85/0.2)] [&>button]:text-white/50 [&>button]:hover:text-primary [&>button]:transition-colors">
        <div className="relative p-8 sm:p-14">
          {/* Subtle gold glow in corner */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[100px] rounded-full -mr-24 -mt-24 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-[80px] rounded-full -ml-16 -mb-16 pointer-events-none" />

          <DialogHeader className="relative text-left">
            <div className="eyebrow mb-6">Patient Onboarding</div>
            <DialogTitle className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {submitted ? "Intake Received." : <>Optimize Your <span className="italic font-light text-primary">Potential.</span></>}
            </DialogTitle>
            <DialogDescription className="mt-6 text-base text-muted-foreground/80 leading-relaxed">
              {submitted 
                ? "Check your inbox — we'll be in touch within 24 hours to schedule your discovery call."
                : "Precision health starts with data. Provide your details to begin the clinical consultation process."
              }
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="mt-12 py-10 text-center reveal in-view">
              <CheckCircle className="mx-auto h-20 w-20 text-primary mb-8 animate-in zoom-in duration-500" strokeWidth={1} />
              <div className="text-sm font-medium text-primary tracking-widest uppercase mb-10">
                {formData.email}
              </div>
              <button
                onClick={handleClose}
                className="text-xs uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-[11px] uppercase tracking-[0.2em] text-primary/80 font-semibold">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Marcus Aurelius"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/[0.03] border-white/10 rounded-none h-14 focus-visible:ring-0 focus-visible:border-primary/50 text-white placeholder:text-white/10 transition-colors"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-[11px] uppercase tracking-[0.2em] text-primary/80 font-semibold">Secure Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="marcus@performance.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/[0.03] border-white/10 rounded-none h-14 focus-visible:ring-0 focus-visible:border-primary/50 text-white placeholder:text-white/10 transition-colors"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="goal" className="text-[11px] uppercase tracking-[0.2em] text-primary/80 font-semibold">Primary Health Objective</Label>
                <Select 
                  required 
                  onValueChange={(val) => setFormData({ ...formData, objective: val })}
                >
                  <SelectTrigger className="bg-white/[0.03] border-white/10 rounded-none h-14 focus:ring-0 text-white focus:border-primary/50 transition-colors text-left">
                    <SelectValue placeholder="Select objective" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0D0D0F] border-white/10 text-white rounded-none shadow-2xl">
                    <SelectItem value="longevity" className="focus:bg-primary/10 focus:text-primary py-3">Longevity & Healthspan</SelectItem>
                    <SelectItem value="performance" className="focus:bg-primary/10 focus:text-primary py-3">Executive Performance</SelectItem>
                    <SelectItem value="hormone" className="focus:bg-primary/10 focus:text-primary py-3">Hormone Optimization</SelectItem>
                    <SelectItem value="recovery" className="focus:bg-primary/10 focus:text-primary py-3">Elite Recovery</SelectItem>
                    <SelectItem value="peptides" className="focus:bg-primary/10 focus:text-primary py-3">Targeted Peptides</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full group relative overflow-hidden border border-primary text-primary px-7 py-5 text-[11px] tracking-[0.25em] uppercase font-bold hover:text-primary-foreground transition-colors duration-500 disabled:opacity-70"
                >
                  <div className={`absolute inset-0 bg-primary transition-transform duration-500 ${isSending ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`} />
                  <span className="relative flex items-center justify-center gap-3">
                    {isSending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Secure Intake
                        <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
                      </>
                    )}
                  </span>
                </button>
                {error && (
                  <p className="mt-4 text-xs text-red-400/80 text-center animate-in fade-in slide-in-from-top-1">
                    {error}
                  </p>
                )}
              </div>

              <p className="text-[10px] text-center text-gray-500 uppercase tracking-widest opacity-60">
                Encrypted Submission • HIPAA Compliant
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
