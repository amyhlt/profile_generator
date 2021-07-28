const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name ?  Nicknames are also acceptable :) ', (name) => {
  const answer1 = name;
    rl.question('What\'s an activity you like doing? ', (activity) => {
      const answer2 = activity;
      rl.question('What do you listen to while doing that? ', (music) => {
        const answer3 = music ;
          rl.question('What Tv show do you watch  while doing that? ', (tvshow) => {
            const answer4 = tvshow;
            rl.question('What\'s your favourite sports? ', (sport) => {
                const answer5 = sport;
                rl.question('What\'s your favourite meal? ', (meal) => {
                  const answer6 = meal;
                  rl.question('What\'s your favourite color? ', (color) => {
                    const answer7 = color;
                    rl.question('What\'s your weakness? ', (weakness) => {
                      const answer8 = weakness;
                      console.log(`My name is ${answer1} and I often  ${answer2}.\n
                      I listen to ${answer3} and my favourite Tv show is ${answer4}. \n
                      My favourite meal is ${answer6} and My favorite sports are ${answer5}. \n
                      I like the color ${answer7}. My weakness is ${answer8}`);

                      rl.close();
                    });
                  });
                });
            });
          });
      });
    });
});
