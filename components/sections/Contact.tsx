import * as motion from "motion/react-client"
import ContactForm from "../ui/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="bg-[#102456] text-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Text & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05]">
                Pronto para conversar?
              </h2>
              <p className="text-md text-lg leading-tight md:leading-relaxed font-light text-slate-300 max-w-lg">
                Conte-nos sobre o seu desafio. Nossa equipe técnica entrará em contato para mapear a melhor solução para sua operação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Telefone</p>
                  <a href="tel:1938497305" className="text-lg hover:text-white/80 transition-colors">(19) 3849-7305</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">E-mail</p>
                  <a href="mailto:contato@mourarocha.com.br" className="text-lg hover:text-white/80 transition-colors">contato@mourarocha.com.br</a>
                </div>
              </div>

              <div className="flex items-start gap-4 md:col-span-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Endereço</p>
                  <p className="text-lg">R. João Corazzari, 311 - Sala 02 - Centro, Vinhedo - SP</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.1873153549645!2d-46.97746402468494!3d-23.035252879165386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2fe6f3f00001%3A0x7d6f5c88b6b9b39d!2sMoura%20Rocha%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1714180000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Form Wrapper */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm sticky top-24"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
