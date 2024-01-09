
self.onmessage = function(event) {
    const data = event.data;
    switch (data.type) {
      case 'calculate':
    
        const result = data.number * 2;
  
        self.postMessage({
          type: 'result',
          result: result,
        });
        break;
  
      default:
        break;
    }
  };
  