const TerminalOverlay = () => {
  return (
    <div className="absolute bottom-4 left-4 right-4">
      <div className="glass rounded-xl p-4 font-mono text-sm">
        {/* Status bar */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-primary/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
            <span className="text-secondary font-medium">AI ANALYSIS ACTIVE</span>
          </div>
          <span className="text-muted-foreground text-xs">v2.1.0</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-foreground">
            <span className="text-primary mr-2">></span>
            <span>Workout optimization complete</span>
          </div>

          <div className="space-y-1 text-xs text-muted-foreground ml-4">
            <div className="flex items-center">
              <div className="text-accent mr-2">01</div>
              <span>Strength training protocol loaded</span>
            </div>
            <div className="flex items-center">
              <div className="text-accent mr-2">02</div>
              <span>Cardio intensity calibrated</span>
            </div>
            <div className="flex items-center">
              <div className="text-accent mr-2">03</div>
              <span>Recovery metrics optimized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalOverlay;