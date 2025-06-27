import { TrendingUpIcon, UsersIcon, ZapIcon, AwardIcon } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: UsersIcon,
      value: "10,000+",
      label: "Active Users",
      description: "Fitness enthusiasts trust our AI",
      color: "text-primary"
    },
    {
      icon: ZapIcon,
      value: "98%",
      label: "Success Rate",
      description: "Users achieve their fitness goals",
      color: "text-secondary"
    },
    {
      icon: TrendingUpIcon,
      value: "3min",
      label: "Setup Time",
      description: "From start to personalized plan",
      color: "text-accent"
    },
    {
      icon: AwardIcon,
      value: "50K+",
      label: "Workouts Generated",
      description: "Personalized fitness programs created",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-primary">Thousands</span> of Fitness Enthusiasts
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our growing community of users who have transformed their fitness journey with AI-powered personalization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              
              <div className="space-y-2">
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;