const text = `The;shop;was;busy;and;the;man;asked;the;shepherd;to;wait;until;the;afternoon;So;the;boy;sat;on;the;steps;of;the;shop;and;took;a;book;from;his;bag;I;didn't;know;shepherds;knew;how;to;readsaid;a;girl's;voice;behind;him;The;girl;was;typical;of;the;region;ofAndalusia;;with;flowing;black;hair;and;eyes;that;vaguely;recalled;the;Moorish;conquerors;Well;usually;I;learn;more;from;my;sheep;than;from;books;he;answered;During;the;two;hours;that;they;talked;she;told;him;she;was;the;merchant's;daughter;and;spoke;of;life;in;the;village;where;each;day;was;like;all;the;others;The;shepherd;told;her;of;the;Andalusian;countryside;and;related;the;news;from;the;other;towns;where;he;had;stopped;It;was;a;pleasant;change;from;talking;to;his;sheep;How;did;you;learn;to;read;the;girl;asked;at;one;point;Like;everybody;learns;he;said;In;school;Well;if;you;know;how;to;read;why;are;you;just;a;shepherd;The;boy;mumbled;an;answer;that;allowed;him;to;avoid;responding;to;her;question;He;was;sure;the;girl;would;never;understand;He;went;on;telling;stories;about;his;travels;and;her;bright;Moorish;eyes;went;wide;with;fear;and;surprise;As;the;time;passed;the;boy;found;himself;wishing;that;the;day;would;never;end;that;her;father;would;stay;busy;and;keep;him;waiting;for;three;days;He;recognized;that;he;was;feeling;something;he;had;never;experienced;before;the;desire;to;live;in;one;place;forever;With;the;girl;with;the;raven;hair;his;days;would;never;be;the;same;again;But;finally;the;merchant;appeared;and;asked;the;boy;to;shear;four;sheep;He;paid;for;the;wool;and;asked;the;shepherd;to;come;back;the;following;year;And;now;it;was;only;four;days;before;he;would;be;back;in;that;same;village;He;was;excited;and;at;the;same;time;uneasy;maybe;the;girl;had;already;forgotten;him;Lots;of;shepherds;passed;through;selling;their;wool;It;doesn't;matter;he;said;to;his;sheep;I;know;other;girls;in;other;places;But;in;his;heart;he;knew;that;it;did;matter;And;he;knew;that;shepherds;like;seamen;and;like;traveling;salesmen;always;found;a;town;where;there;was;someone;who;could;make;them;forget;the;joys;of;carefree;wandering`;

export default [
  ...new Set(
    text
      .toLowerCase()
      .split(';')
      .filter(word => word.length > 2 && !word.includes("'")),
  ),
];
