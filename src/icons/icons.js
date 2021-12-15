import icon01 from "./01.png";
import icon02 from "./02.png";

const icons2 = [icon01, icon02];

const Icons = icons2.reduce(function(res, current) {
  console.log(res, "res")
  return res.concat([current, current]);
}, []);
export { Icons };
