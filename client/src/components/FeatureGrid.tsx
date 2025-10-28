import { Card } from '@/components/ui/card';
import { Phone, MessageSquare, Calendar, BarChart3, Zap, Bot } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: 'Intelligent Call Handling',
    description: 'AI agents answer every call instantly, qualify leads, and book appointments without human intervention.'
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Deploy intelligent chatbots on your website to engage visitors, answer questions, and convert leads 24/7.'
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    description: 'Advanced language models ensure human-like interactions that keep customers engaged and satisfied.'
  },
  {
    icon: Calendar,
    title: 'Automated Scheduling',
    description: 'Seamlessly integrates with your calendar to book appointments and send confirmations automatically.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track every conversation, conversion, and metric in your personalized dashboard with live insights.'
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Get your AI agent live in minutes. No technical expertise required, no lengthy implementation process.'
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that work together to capture every opportunity and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`feature-card-${index}`}
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
