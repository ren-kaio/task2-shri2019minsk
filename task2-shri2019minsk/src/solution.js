const solution = function(graph, start, finish)  {
    // Мое решение:
    
    try {
    let processed = ["start"];
    
    let parents ={};
    parents["finish"] = null;
    for(let child in graph["start"]) {
      parents[child] = "start";
    }
    
     //проверка:
     alert(JSON.stringify(parents));
    
    
    let costs = {};
    
     for(let el in graph["start"]) {
      costs[el] = graph["start"][el];
    }
    
    costs["finish"] = Infinity; costs["start"] = 0;
    //проверка:
     alert(JSON.stringify(costs));
 
 function isProcessed(item) {
 for(var i=0; i<processed.length; i++) {
 if(processed[i] == item) return true;
 }
 return false;
  }
  
  
  function findMinCostNode(costs) {
   let min;
    for(node in costs) {
    if((!min || (costs[node]<costs[min])) && !(isProcessed(node)))  {
      min = node;
    } 
    
    }
    return min;
  }
  
  
  
  function checkNeighbours(graph, node) {
    for(neighbour in graph[node]) {
     let cost = graph[node][neighbour];
     // let parent = parents[neighbour];
     if( !isProcessed(node) && ( (!costs[neighbour]) || (costs[neighbour]>(cost+costs[node])) )) {
    // alert(parent);
   //  alert('costs+ = '+ cost+costs[parent]);
     costs[neighbour] = cost+costs[node];
     parents[neighbour] = node;
     }
    
    }
    processed.push(node);
  }
  
  
  function findPath(graph, costs) {
    
    
  
    let min = findMinCostNode(costs);             
  //  min = findMinCostNode(costs); 
  //  alert('min'+min);
  //  alert(JSON.stringify(costs));
  //  alert(JSON.stringify(parents));
 
    while(min) {
            checkNeighbours(graph, min);
   
   min = findMinCostNode(costs);
   // alert('min'+min);
 
  //   alert(JSON.stringify(costs));
  //   alert(JSON.stringify(parents));
   }
     
      
   }
  findPath(graph, costs);
  
  // alert('final costs:' + JSON.stringify(costs));
 //  alert('final parents:' + JSON.stringify(parents));


 // итоговый путь вычисляем по массиву Родителей:
 
 let path = [];
 path.push('finish');
 let parent = parents['finish'];
 while(parent) {
 path.push(parent);
  parent = parents[parent];
  };
  
  path=path.reverse();

  alert('path = ' + path);
  alert('minimal cost to get to finish = ' + costs['finish']);
 
  
  return {
    distance: costs['finish'],
    path: path
    }
  
    } catch(e) {
    alert(e);
    }
    
    
    
    
    
    
}