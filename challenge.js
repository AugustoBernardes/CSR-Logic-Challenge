
// CSR Challenge

function challenge(amount_friends, steps) {

    // Adding friends on queue
    let friends_queue = [];
    let eliminated_friends = [];

    for (let i = 1; i <= amount_friends; i++){
        friends_queue.push(i);
    }
    
    while (friends_queue.length != 1) {

        // Calculating how is gonna be eliminated
        for (let next = 1; next < steps; next++){
          
            friends_queue.push(friends_queue.shift());
            
        }
        
        // Setting eliminated friends
        eliminated_friends.push(friends_queue.shift());
        
    }
    
    console.log(`Friends eliminated are: ${eliminated_friends.join(" ")}`);
    return friends_queue[0]; 
}

console.log(`Winner: ${challenge(5, 2) }`);