class Ship {
    constructor(draft, crew) {
      this.draft = draft; 
      this.crew = crew;   
    }
    
    isWorthIt() {
      const crewDraft = this.draft - this.crew * 1.5;
      return crewDraft > 20;
    }
  }
  
  const titanic = new Ship(15, 10); 
  console.log(titanic.isWorthIt()); 
  
  