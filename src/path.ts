import { basename, resolve, dirname, join, extname } from "path";

const filepath = "https://devblazeagrsite.run12345.com/games/roulette-games.html";

console.log('Basename: ', basename(filepath));
console.log('Dirname: ', dirname(filepath));
console.log("extname: ", extname(filepath));
console.log('Resolve: ', resolve(filepath));
console.log('Join: ', join(filepath));
