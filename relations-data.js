// 英雄联盟英雄关系数据库 - 完整版
// 关系类型说明：
// - sworn_enemy: 宿敌/死敌（深仇大恨，有特殊语音）
// - best_friend: 挚友/生死之交（有特殊语音）
// - family: 家人/亲属（血缘关系）
// - lover: 恋人/夫妻
// - mentor: 师徒/上下级
// - ally: 盟友/同僚（同一阵营）
// - friend: 朋友
// - enemy: 敌人（普通敌对）
// - rival: 竞争对手
// - complex: 复杂关系（爱恨交织、亦敌亦友等）
//
// 特殊标记：
// - hasSpecialVoice: 游戏中一起出现有特殊对白/彩蛋
// - note: 关系备注和背景说明

window.RELATION_TYPES = {
  'sworn_enemy': { name: '宿敌', color: '#ff4444', icon: '⚔️' },
  'best_friend': { name: '挚友', color: '#44ff88', icon: '🤝' },
  'family': { name: '家人', color: '#ff88cc', icon: '❤️' },
  'lover': { name: '恋人', color: '#ff6699', icon: '💕' },
  'mentor': { name: '师徒', color: '#aa88ff', icon: '📚' },
  'ally': { name: '盟友', color: '#66ccff', icon: '🛡️' },
  'friend': { name: '朋友', color: '#88ffcc', icon: '😊' },
  'enemy': { name: '敌人', color: '#ff6644', icon: '👊' },
  'rival': { name: '竞争对手', color: '#ffaa44', icon: '🏆' },
  'complex': { name: '复杂关系', color: '#cc88ff', icon: '🔀' }
};

window.HERO_RELATIONS = {
  // ========== 德玛西亚阵营 ==========
  "盖伦": {
    relations: [
      { target: "嘉文四世", type: "best_friend", hasSpecialVoice: true,
        note: "德玛西亚三兄弟之首，从小一起长大，盖伦是嘉文最信任的人。嘉文被诺克萨斯俘虏时，盖伦率队冒死营救。" },
      { target: "赵信", type: "best_friend", hasSpecialVoice: true,
        note: "德玛西亚三兄弟之一，赵信被盖伦从绞肉大赛救出后加入德玛西亚，两人成为生死之交。" },
      { target: "拉克丝", type: "family", hasSpecialVoice: true,
        note: "亲兄妹。盖伦是冕卫家族长子，拉克丝是妹妹。盖伦疼爱妹妹，但拉克丝偷偷学习魔法的事一直瞒着哥哥。" },
      { target: "卡特琳娜", type: "sworn_enemy", hasSpecialVoice: true,
        note: "宿命的对手。盖伦在战场上多次与卡特琳娜交锋，两人实力相当，互相欣赏对方的实力，但立场完全对立。坊间有两人的绯闻传说。" },
      { target: "德莱厄斯", type: "sworn_enemy", hasSpecialVoice: true,
        note: "两国最高战力的对决。德玛西亚之力 vs 诺克萨斯之手，是两国战争中的标志性对抗。" },
      { target: "塞拉斯", type: "enemy", hasSpecialVoice: true,
        note: "塞拉斯叛乱后，盖伦率军镇压。盖伦对塞拉斯利用拉克丝的事极为愤怒。" },
      { target: "菲奥娜", type: "rival", hasSpecialVoice: false,
        note: "德玛西亚的两大剑客，菲奥娜曾挑战盖伦的地位，两人是剑术上的竞争对手。" },
      { target: "奎因", type: "ally", note: "德玛西亚游骑兵，盖伦的战友。" },
      { target: "加里奥", type: "ally", note: "德玛西亚的守护者石像，盖伦是其保护的重要人物。" },
      { target: "薇恩", type: "ally", note: "同属德玛西亚阵营。" },
      { target: "波比", type: "ally", note: "同属德玛西亚阵营。" },
      { target: "莫甘娜", type: "enemy", note: "莫甘娜在德玛西亚地下活动，与官方势力对立。" }
    ]
  },
  "嘉文四世": {
    relations: [
      { target: "盖伦", type: "best_friend", hasSpecialVoice: true,
        note: "德玛西亚皇子与德玛西亚之力，从小一起长大，盖伦是嘉文最信任的挚友。" },
      { target: "赵信", type: "best_friend", hasSpecialVoice: true,
        note: "德玛西亚三兄弟，赵信是嘉文的御前侍卫总管，两人情同手足。" },
      { target: "塞恩", type: "sworn_enemy", hasSpecialVoice: true,
        note: "塞恩曾在战场上杀死嘉文二世（嘉文四世的祖父），嘉文四世视其为世仇。后来塞恩被亡灵复活，两人再次对决。" },
      { target: "斯维因", type: "sworn_enemy", hasSpecialVoice: false,
        note: "两国领袖的对决，德玛西亚皇子 vs 诺克萨斯大统领。" },
      { target: "希瓦娜", type: "friend", note: "嘉文救了希瓦娜，两人关系亲密。" },
      { target: "拉克丝", type: "friend", note: "盖伦的妹妹，嘉文的好友。" },
      { target: "塔里克", type: "friend", note: "塔里克曾是嘉文的护卫。" },
      { target: "奎因", type: "ally", note: "德玛西亚战友。" },
      { target: "菲奥娜", type: "rival", note: "劳伦特家族曾试图谋反，菲奥娜与王室关系微妙。" }
    ]
  },
  "赵信": {
    relations: [
      { target: "盖伦", type: "best_friend", hasSpecialVoice: true,
        note: "德玛西亚三兄弟，盖伦将赵信从绞肉大赛救出，赵信誓死效忠。" },
      { target: "嘉文四世", type: "best_friend", hasSpecialVoice: true,
        note: "德玛西亚三兄弟，赵信是御前侍卫总管，与嘉文情同手足。" },
      { target: "易", type: "mentor", note: "赵信年轻时曾向易学习剑术，是易的弟子之一。" }
    ]
  },
  "拉克丝": {
    relations: [
      { target: "盖伦", type: "family", hasSpecialVoice: true,
        note: "亲兄妹。拉克丝崇拜哥哥，但一直隐瞒自己会魔法的事实。" },
      { target: "塞拉斯", type: "complex", hasSpecialVoice: true,
        note: "复杂关系。拉克丝曾去监狱探望塞拉斯，向他学习控制魔法，两人产生了微妙的感情。但塞拉斯利用拉克丝发动叛乱后，关系彻底破裂。" },
      { target: "伊泽瑞尔", type: "friend", hasSpecialVoice: true,
        note: "皮尔特沃夫的探险家与德玛西亚的光辉女郎，两人在冒险中相识，关系暧昧。游戏中有特殊互动语音。" },
      { target: "嘉文四世", type: "friend", note: "哥哥的挚友，拉克丝的好友。" },
      { target: "莫甘娜", type: "enemy", note: "拉克丝代表光明，莫甘娜代表黑暗，两人是对立面。" }
    ]
  },
  "塞拉斯": {
    relations: [
      { target: "拉克丝", type: "complex", hasSpecialVoice: true,
        note: "复杂的爱恨关系。塞拉斯在狱中时，拉克丝常来探望，向他学习魔法。塞拉斯利用拉克丝越狱并发动叛乱，伤透了拉克丝的心。但两人之间仍有复杂的感情。" },
      { target: "盖伦", type: "sworn_enemy", hasSpecialVoice: true,
        note: "塞拉斯认为盖伦代表了德玛西亚的虚伪，立誓要推翻德玛西亚的魔法压迫。" },
      { target: "嘉文四世", type: "enemy", note: "叛乱的目标是推翻德玛西亚王室。" },
      { target: "瑟庄妮", type: "ally", note: "塞拉斯叛乱失败后逃到弗雷尔卓德，与瑟庄妮结盟。" }
    ]
  },
  "菲奥娜": {
    relations: [
      { target: "盖伦", type: "rival", note: "德玛西亚两大剑客，菲奥娜不服盖伦的地位。" },
      { target: "嘉文四世", type: "complex", note: "劳伦特家族曾被指控谋反，菲奥娜为家族洗刷冤屈，但与王室关系复杂。" },
      { target: "贾克斯", type: "rival", hasSpecialVoice: true,
        note: "菲奥娜是少数能与贾克斯一战的剑客，两人互为对手，互相欣赏。" }
    ]
  },
  "薇恩": {
    relations: [
      { target: "莫甘娜", type: "sworn_enemy", hasSpecialVoice: false,
        note: "薇恩的家人被恶魔所杀，她发誓猎杀一切黑暗生物，包括莫甘娜。" },
      { target: "伊芙琳", type: "sworn_enemy", note: "痛苦之僧是薇恩的猎杀目标之一。" },
      { target: "盖伦", type: "ally", note: "同属德玛西亚阵营。" }
    ]
  },
  "莫甘娜": {
    relations: [
      { target: "凯尔", type: "sworn_enemy", hasSpecialVoice: true,
        note: "亲姐妹，也是宿敌。凯尔代表正义与秩序，莫甘娜代表自由与人性。两人理念完全对立，在德玛西亚上空大战过。" },
      { target: "薇恩", type: "enemy", note: "薇恩视莫甘娜为黑暗生物。" },
      { target: "拉克丝", type: "enemy", note: "光明与黑暗的对立。" }
    ]
  },
  "凯尔": {
    relations: [
      { target: "莫甘娜", type: "sworn_enemy", hasSpecialVoice: true,
        note: "亲姐妹，理念完全对立。凯尔追求绝对正义，莫甘娜相信人性的复杂。" }
    ]
  },
  "加里奥": {
    relations: [
      { target: "盖伦", type: "ally", note: "德玛西亚的守护者。" },
      { target: "嘉文四世", type: "ally", note: "守护德玛西亚王室。" },
      { target: "拉克丝", type: "friend", note: "拉克丝的魔法能量经常唤醒加里奥。" }
    ]
  },

  // ========== 诺克萨斯阵营 ==========
  "德莱厄斯": {
    relations: [
      { target: "德莱文", type: "family", hasSpecialVoice: true,
        note: "亲兄弟。两人都是孤儿，在诺克萨斯底层相依为命。德莱厄斯是哥哥，性格沉稳冷酷；德莱文是弟弟，性格张扬疯狂。" },
      { target: "盖伦", type: "sworn_enemy", hasSpecialVoice: true,
        note: "诺克萨斯之手 vs 德玛西亚之力，两国最强战士的宿命对决。" },
      { target: "斯维因", type: "complex", hasSpecialVoice: true,
        note: "复杂的上下级关系。德莱厄斯是诺克萨斯的战神，斯维因是大统领。两人互相欣赏但也互相提防，德莱厄斯曾支持斯维因政变上台。" },
      { target: "乐芙兰", type: "complex", hasSpecialVoice: false,
        note: "黑色玫瑰的首领与诺克萨斯之手，互相利用又互相提防。乐芙兰曾试图控制德莱厄斯，但失败了。" },
      { target: "卡特琳娜", type: "ally", hasSpecialVoice: true,
        note: "诺克萨斯的两大刺客/战士，德莱厄斯是卡特琳娜父亲的旧识，对卡特琳娜有前辈对后辈的欣赏。" },
      { target: "锐雯", type: "sworn_enemy", hasSpecialVoice: true,
        note: "锐雯曾是德莱厄斯的部下，但后来背叛了诺克萨斯。德莱厄斯视其为叛徒，必杀之。" },
      { target: "塞恩", type: "ally", note: "诺克萨斯的战争机器。" }
    ]
  },
  "德莱文": {
    relations: [
      { target: "德莱厄斯", type: "family", hasSpecialVoice: true,
        note: "亲兄弟。德莱文崇拜哥哥，但性格完全不同，喜欢炫耀和掌声。" },
      { target: "锐雯", type: "rival", note: "德莱文喜欢追捕锐雯，享受狩猎的快感。" }
    ]
  },
  "卡特琳娜": {
    relations: [
      { target: "盖伦", type: "sworn_enemy", hasSpecialVoice: true,
        note: "宿命的对手，战场上多次交锋，互相欣赏对方的实力。坊间流传两人的绯闻，但立场对立。" },
      { target: "泰隆", type: "mentor", hasSpecialVoice: true,
        note: "泰隆是卡特琳娜父亲（杜克卡奥将军）收养的刺客，相当于卡特琳娜的师兄/保镖。两人关系亦师亦友。" },
      { target: "卡西奥佩娅", type: "family", hasSpecialVoice: false,
        note: "亲姐妹。卡特琳娜是姐姐，擅长匕首；卡西奥佩娅是妹妹，擅长魔法和政治。两人性格迥异。" },
      { target: "德莱厄斯", type: "ally", note: "诺克萨斯战友。" },
      { target: "斯维因", type: "complex", note: "卡特琳娜的父亲失踪与斯维因有关，关系微妙。" },
      { target: "乐芙兰", type: "enemy", note: "黑色玫瑰与杜克卡奥家族的明争暗斗。" }
    ]
  },
  "泰隆": {
    relations: [
      { target: "卡特琳娜", type: "mentor", hasSpecialVoice: true,
        note: "泰隆被卡特琳娜的父亲收养，成为家族刺客。他对卡特琳娜有保护欲，亦师亦友。" },
      { target: "乐芙兰", type: "sworn_enemy", note: "泰隆怀疑乐芙兰与他恩人的失踪有关。" }
    ]
  },
  "斯维因": {
    relations: [
      { target: "乐芙兰", type: "complex", hasSpecialVoice: true,
        note: "亦敌亦友的复杂关系。斯维因的力量来自恶魔，乐芙兰是黑色玫瑰首领。两人互相利用，又互相忌惮。斯维因政变上台后，乐芙兰暗中活动。" },
      { target: "德莱厄斯", type: "complex", hasSpecialVoice: true,
        note: "诺克萨斯的领袖与战神。互相欣赏，但也互相提防。" },
      { target: "嘉文四世", type: "sworn_enemy", note: "两国领袖的对决。" },
      { target: "塞恩", type: "ally", note: "斯维因将塞恩复活为亡灵战士。" }
    ]
  },
  "乐芙兰": {
    relations: [
      { target: "斯维因", type: "complex", hasSpecialVoice: true,
        note: "黑色玫瑰首领与诺克萨斯大统领的明争暗斗。乐芙兰活了千年，斯维因是她意想不到的变数。" },
      { target: "德莱厄斯", type: "complex", note: "乐芙兰曾试图控制德莱厄斯，但失败了。" },
      { target: "卡特琳娜", type: "enemy", note: "与杜克卡奥家族的恩怨。" },
      { target: "泰隆", type: "enemy", note: "泰隆在调查乐芙兰。" },
      { target: "莫德凯撒", type: "complex", note: "两个活了千年的存在，互相知根知底。" }
    ]
  },
  "锐雯": {
    relations: [
      { target: "亚索", type: "complex", hasSpecialVoice: true,
        note: "极其复杂的关系。锐雯曾是诺克萨斯士兵，参与了艾欧尼亚战争，正是她杀死了亚索守护的长老。亚索背负杀人凶手的罪名逃亡多年。真相大白后，两人之间既有仇恨，也有宿命的纠缠。" },
      { target: "德莱厄斯", type: "sworn_enemy", hasSpecialVoice: true,
        note: "锐雯曾是德莱厄斯最得意的部下，但她背叛了诺克萨斯。德莱厄斯视其为叛徒。" },
      { target: "德莱文", type: "enemy", note: "德莱文喜欢追捕锐雯。" },
      { target: "辛吉德", type: "sworn_enemy", note: "辛吉德的化学武器让锐雯的部队全军覆没，也让锐雯彻底对诺克萨斯失望。" }
    ]
  },
  "赛恩": {
    relations: [
      { target: "嘉文四世", type: "sworn_enemy", hasSpecialVoice: true,
        note: "赛恩生前杀死了嘉文二世（嘉文四世的祖父），死后被复活，继续与德玛西亚为敌。" },
      { target: "盖伦", type: "enemy", note: "诺克萨斯与德玛西亚的战争机器。" }
    ]
  },
  "卡西奥佩娅": {
    relations: [
      { target: "卡特琳娜", type: "family", note: "亲姐妹，性格迥异。" },
      { target: "希维尔", type: "enemy", note: "卡西奥佩娅在恕瑞玛的陵墓中利用了希维尔。" },
      { target: "内瑟斯", type: "enemy", note: "在恕瑞玛陵墓中遭遇。" }
    ]
  },
  "莫德凯撒": {
    relations: [
      { target: "乐芙兰", type: "complex", note: "两个活了千年的存在，互相知根知底。" },
      { target: "锤石", type: "complex", note: "莫德凯撒是暗影岛的原主人，锤石觊觎他的力量。" },
      { target: "塞恩", type: "enemy", note: "莫德凯撒曾是诺克萨斯的开国皇帝，塞恩是后来的战争机器。" }
    ]
  },

  // ========== 艾欧尼亚阵营 ==========
  "劫": {
    relations: [
      { target: "慎", type: "sworn_enemy", hasSpecialVoice: true,
        note: "曾经的师兄弟，现在的死敌。劫杀死了慎的父亲（暮光之眼·苦说大师），背叛了均衡教派，创立了影流。两人理念完全对立：劫主张以暴制暴，慎主张平衡。" },
      { target: "阿卡丽", type: "complex", hasSpecialVoice: true,
        note: "复杂的关系。阿卡丽曾是均衡教派的暗影之拳，后因不满慎的理念而离开。她与劫有相似的想法，但不认同劫的极端手段。" },
      { target: "凯南", type: "enemy", note: "均衡教派的狂暴之心，劫的敌人。" },
      { target: "烬", type: "sworn_enemy", hasSpecialVoice: true,
        note: "烬是劫的宿敌。劫曾追捕烬多年，烬的存在挑战了劫的理念。" },
      { target: "慎的父亲", type: "sworn_enemy", note: "劫杀死了苦说大师。" }
    ]
  },
  "慎": {
    relations: [
      { target: "劫", type: "sworn_enemy", hasSpecialVoice: true,
        note: "曾经的师兄弟，现在的死敌。劫杀死了慎的父亲，两人不共戴天。" },
      { target: "阿卡丽", type: "complex", hasSpecialVoice: true,
        note: "曾经的同门，阿卡丽是暗影之拳，慎是暮光之眼。阿卡丽不满慎的平衡理念而离开。" },
      { target: "凯南", type: "best_friend", hasSpecialVoice: true,
        note: "均衡三忍之一，凯南是狂暴之心，慎最信任的战友。" },
      { target: "烬", type: "enemy", note: "烬是均衡教派的敌人。" }
    ]
  },
  "阿卡丽": {
    relations: [
      { target: "慎", type: "complex", hasSpecialVoice: true,
        note: "曾经的同门。阿卡丽不满慎的'均衡'理念，认为对侵略者应该反击，于是离开了均衡教派，单干。" },
      { target: "劫", type: "complex", hasSpecialVoice: true,
        note: "阿卡丽认同劫的部分想法，但不认同他的极端手段。两人之间既有合作也有对抗。" },
      { target: "凯南", type: "friend", hasSpecialVoice: true,
        note: "曾经的同门，凯南是阿卡丽的师兄，两人关系不错。" },
      { target: "艾瑞莉娅", type: "ally", note: "艾欧尼亚的保卫者们。" }
    ]
  },
  "凯南": {
    relations: [
      { target: "慎", type: "best_friend", hasSpecialVoice: true,
        note: "均衡三忍之一，慎最信任的战友。" },
      { target: "阿卡丽", type: "friend", hasSpecialVoice: true,
        note: "曾经的同门，师兄妹关系。" },
      { target: "劫", type: "enemy", note: "劫是均衡教派的叛徒。" }
    ]
  },
  "烬": {
    relations: [
      { target: "劫", type: "sworn_enemy", hasSpecialVoice: true,
        note: "劫追捕烬多年，烬把杀人当成艺术，劫认为他是必须消灭的恶魔。" },
      { target: "慎", type: "enemy", note: "烬与均衡教派为敌。" },
      { target: "卡蜜尔", type: "enemy", note: "卡蜜尔曾追捕烬。" },
      { target: "韦鲁斯", type: "complex", note: "两个对'美'有执念的存在。" }
    ]
  },
  "亚索": {
    relations: [
      { target: "锐雯", type: "complex", hasSpecialVoice: true,
        note: "极其复杂的宿命。锐雯是杀死亚索守护的长老的真凶，亚索因此背负污名逃亡多年。真相大白后，两人之间既有血海深仇，也有说不清的宿命纠缠。亚索的风 vs 锐雯的断剑。" },
      { target: "永恩", type: "family", hasSpecialVoice: true,
        note: "亲兄弟。永恩是哥哥，亚索是弟弟。永恩曾因长老之死追杀亚索，兄弟相残，永恩死于亚索剑下（误杀）。后来永恩从灵界归来，以封魔剑魂的身份复活。" },
      { target: "阿狸", type: "friend", note: "阿狸曾帮助亚索寻找真相。" },
      { target: "易", type: "friend", note: "两位艾欧尼亚的剑客，互相欣赏。" },
      { target: "瑞兹", type: "friend", note: "瑞兹曾指点亚索。" }
    ]
  },
  "永恩": {
    relations: [
      { target: "亚索", type: "family", hasSpecialVoice: true,
        note: "亲兄弟。永恩是哥哥，一直保护弟弟。长老之死后，永恩不得不追杀亚索，最终死于弟弟剑下。死后在灵界战胜了自己的心魔，以封魔剑魂的身份归来。" },
      { target: "劫", type: "enemy", note: "封魔剑魂与影流之主的对立。" }
    ]
  },
  "李青": {
    relations: [
      { target: "乌迪尔", type: "best_friend", note: "两位艾欧尼亚的守护者。" },
      { target: "卡尔玛", type: "ally", note: "李青支持卡尔玛的灵犀之意。" },
      { target: "瑟提", type: "rival", note: "盲僧与腕豪，两种格斗风格的对决。" }
    ]
  },
  "艾瑞莉娅": {
    relations: [
      { target: "卡尔玛", type: "ally", note: "艾欧尼亚的两位精神领袖。" },
      { target: "阿卡丽", type: "ally", note: "共同保卫艾欧尼亚。" },
      { target: "德莱厄斯", type: "sworn_enemy", note: "艾瑞莉娅率领艾欧尼亚人抵抗诺克萨斯入侵。" },
      { target: "斯维因", type: "enemy", note: "诺克萨斯的入侵。" }
    ]
  },
  "卡尔玛": {
    relations: [
      { target: "艾瑞莉娅", type: "ally", note: "艾欧尼亚的精神领袖。" },
      { target: "李青", type: "ally", note: "志同道合的守护者。" },
      { target: "劫", type: "enemy", note: "卡尔玛不认同劫的暴力手段。" }
    ]
  },
  "瑟提": {
    relations: [
      { target: "李青", type: "rival", note: "格斗对手。" },
      { target: "德莱厄斯", type: "enemy", note: "诺克萨斯曾试图征服艾欧尼亚。" }
    ]
  },
  "阿狸": {
    relations: [
      { target: "亚索", type: "friend", note: "阿狸曾帮助亚索。" },
      { target: "洛", type: "friend", note: "瓦斯塔亚同胞。" },
      { target: "霞", type: "friend", note: "瓦斯塔亚同胞。" },
      { target: "妮蔻", type: "friend", note: "瓦斯塔亚同胞。" },
      { target: "孙悟空", type: "friend", note: "艾欧尼亚的朋友们。" }
    ]
  },
  "易": {
    relations: [
      { target: "孙悟空", type: "mentor", hasSpecialVoice: true,
        note: "易是孙悟空的师父，传授他无极剑道。" },
      { target: "赵信", type: "mentor", note: "赵信年轻时曾向易学习。" },
      { target: "亚索", type: "friend", note: "两位剑客，互相欣赏。" }
    ]
  },
  "孙悟空": {
    relations: [
      { target: "易", type: "mentor", hasSpecialVoice: true,
        note: "易大师的徒弟。" }
    ]
  },

  // ========== 皮尔特沃夫 & 祖安阵营 ==========
  "蔚": {
    relations: [
      { target: "金克丝", type: "family", hasSpecialVoice: true,
        note: "亲姐妹。蔚是姐姐，金克丝是妹妹（原名爆爆）。两人在祖安底层一起长大，后来因悲剧事件分道扬镳。蔚加入了皮城执法官，金克丝成了疯子。两人相爱相杀，是英雄联盟最经典的姐妹关系。" },
      { target: "凯特琳", type: "best_friend", hasSpecialVoice: true,
        note: "皮城执法官搭档。凯特琳是警长，蔚是她的副手。两人是最好的搭档和朋友，配合默契。游戏中有大量特殊互动语音。" },
      { target: "艾克", type: "friend", hasSpecialVoice: true,
        note: "童年好友。三人（蔚、爆爆、艾克）曾在祖安一起长大。蔚和艾克关系很好，艾克一直暗恋蔚。" },
      { target: "希尔科", type: "enemy", note: "希尔科带走了金克丝，蔚视其为仇敌。" },
      { target: "范德尔", type: "family", note: "养父。范德尔收养了蔚和爆爆。" },
      { target: "杰斯", type: "ally", note: "皮城同僚。" },
      { target: "黑默丁格", type: "ally", note: "皮城同僚。" }
    ]
  },
  "金克丝": {
    relations: [
      { target: "蔚", type: "family", hasSpecialVoice: true,
        note: "亲姐妹。原名爆爆，因一场悲剧导致精神崩溃，变成了金克丝。她对蔚的感情极其复杂：又爱又恨，想靠近又害怕被抛弃。两人的关系是双城之战的核心。" },
      { target: "凯特琳", type: "sworn_enemy", hasSpecialVoice: true,
        note: "皮城女警 vs 暴走萝莉，猫抓老鼠的游戏。金克丝喜欢挑衅凯特琳，凯特琳则一心要抓住金克丝。" },
      { target: "艾克", type: "complex", hasSpecialVoice: true,
        note: "童年好友。艾克一直喜欢爆爆，但金克丝已经不是当年的爆爆了。两人现在是敌人，但艾克内心深处仍希望她能回来。" },
      { target: "希尔科", type: "family", hasSpecialVoice: true,
        note: "养父般的存在。希尔科在爆爆最脆弱的时候'收留'了她，把她培养成金克丝。两人关系复杂，希尔科对金克丝有父爱，但也在利用她。" },
      { target: "范德尔", type: "family", note: "曾经的养父。" },
      { target: "辛吉德", type: "friend", note: "祖安的疯狂科学家，金克丝的朋友。" }
    ]
  },
  "凯特琳": {
    relations: [
      { target: "蔚", type: "best_friend", hasSpecialVoice: true,
        note: "皮城执法官搭档，最好的朋友。凯特琳把蔚从祖安挖出来当副手，两人配合天衣无缝。" },
      { target: "金克丝", type: "sworn_enemy", hasSpecialVoice: true,
        note: "皮城女警 vs 暴走萝莉，宿敌。" },
      { target: "杰斯", type: "friend", hasSpecialVoice: true,
        note: "皮城的两位名人，凯特琳是警长之女，杰斯是未来守护者。两人是好友。" },
      { target: "伊泽瑞尔", type: "friend", note: "皮尔特沃夫的探险家。" }
    ]
  },
  "艾克": {
    relations: [
      { target: "蔚", type: "friend", hasSpecialVoice: true,
        note: "童年好友，艾克一直暗恋蔚。" },
      { target: "金克丝", type: "complex", hasSpecialVoice: true,
        note: "童年好友。艾克喜欢的是当年的爆爆，但金克丝已经变了。两人现在是敌人，但艾克仍对她有感情。" },
      { target: "杰斯", type: "enemy", note: "皮城与祖安的对立。" },
      { target: "维克托", type: "friend", note: "同属祖安阵营。" }
    ]
  },
  "杰斯": {
    relations: [
      { target: "维克托", type: "complex", hasSpecialVoice: true,
        note: "曾经的挚友，现在的宿敌。两人都是天才科学家，一起研究海克斯科技。但理念分歧越来越大：杰斯追求用科技保护人类，维克托追求用机械升华人类。最终决裂，分道扬镳。" },
      { target: "凯特琳", type: "friend", hasSpecialVoice: true,
        note: "皮城的两位精英，好友。" },
      { target: "伊泽瑞尔", type: "friend", note: "皮城好友。" },
      { target: "黑默丁格", type: "mentor", note: "杰斯的导师。" },
      { target: "梅尔", type: "lover", note: "杰斯的恋人，皮城议员。" }
    ]
  },
  "维克托": {
    relations: [
      { target: "杰斯", type: "complex", hasSpecialVoice: true,
        note: "曾经的挚友，现在的宿敌。维克托认为杰斯背叛了他们的理想。他越来越沉迷于光荣进化，认为人类应该用机械改造自身。" },
      { target: "布里茨", type: "mentor", note: "布里茨是维克托创造的。" },
      { target: "艾克", type: "friend", note: "同属祖安。" },
      { target: "辛吉德", type: "enemy", note: "维克托不认同辛吉德的疯狂实验。" }
    ]
  },
  "卡蜜尔": {
    relations: [
      { target: "烬", type: "enemy", note: "卡蜜尔曾追捕烬。" },
      { target: "杰斯", type: "complex", note: "卡蜜尔是菲罗斯家族的特工，与皮城政治有复杂关系。" },
      { target: "维克托", type: "complex", note: "卡蜜尔的身体也有机械改造。" }
    ]
  },
  "辛吉德": {
    relations: [
      { target: "沃里克", type: "complex", note: "辛吉德改造了沃里克，把他变成了狼人。" },
      { target: "锐雯", type: "sworn_enemy", note: "辛吉德的化学武器摧毁了锐雯的部队。" },
      { target: "金克丝", type: "friend", note: "祖安的疯子们。" }
    ]
  },
  "沃里克": {
    relations: [
      { target: "范德尔", type: "complex", note: "有说法沃里克就是范德尔被辛吉德改造后的样子。" },
      { target: "辛吉德", type: "sworn_enemy", note: "辛吉德改造了沃里克，沃里克恨他。" },
      { target: "蔚", type: "complex", note: "如果沃里克是范德尔，那就是养父与养女的关系。" },
      { target: "金克丝", type: "complex", note: "同上。" }
    ]
  },
  "伊泽瑞尔": {
    relations: [
      { target: "拉克丝", type: "friend", hasSpecialVoice: true,
        note: "探险家与光辉女郎，关系暧昧。游戏中有特殊互动语音。" },
      { target: "杰斯", type: "friend", note: "皮城好友。" },
      { target: "凯特琳", type: "friend", note: "皮城好友。" },
      { target: "瑞兹", type: "friend", note: "两位旅行者。" }
    ]
  },

  // ========== 暗影岛阵营 ==========
  "佛耶戈": {
    relations: [
      { target: "伊苏尔德", type: "lover", hasSpecialVoice: true,
        note: "佛耶戈的亡妻。佛耶戈之所以成为破败之王，就是因为想复活伊苏尔德。他的一切行动都是为了找回妻子。" },
      { target: "格温", type: "complex", hasSpecialVoice: true,
        note: "格温是伊苏尔德生前缝制的玩偶，被伊苏尔德的灵魂碎片赋予生命。佛耶戈对格温的感情复杂——她既是妻子的造物，又不是妻子本人。" },
      { target: "锤石", type: "enemy", hasSpecialVoice: true,
        note: "锤石觊觎佛耶戈的力量，两人互相利用。" },
      { target: "卢锡安", type: "sworn_enemy", hasSpecialVoice: true,
        note: "卢锡安的妻子赛娜被锤石囚禁，而佛耶戈的破败之咒席卷符文之地，两人是死敌。" },
      { target: "赛娜", type: "sworn_enemy", note: "光明哨兵的领袖与破败之王。" },
      { target: "卡莉丝塔", type: "enemy", note: "暗影岛的亡灵们。" }
    ]
  },
  "格温": {
    relations: [
      { target: "佛耶戈", type: "complex", hasSpecialVoice: true,
        note: "格温是伊苏尔德缝制的玩偶，被伊苏尔德的灵魂碎片赋予生命。佛耶戈想从格温身上找回妻子，但格温是独立的个体。" },
      { target: "伊苏尔德", type: "family", note: '格温的"妈妈"，伊苏尔德的灵魂碎片在格温体内。' }
    ]
  },
  "锤石": {
    relations: [
      { target: "卢锡安", type: "sworn_enemy", hasSpecialVoice: true,
        note: "锤石杀死了卢锡安的父亲（或将其灵魂囚禁在灯笼里），卢锡安立誓报仇。两人是经典的宿敌。" },
      { target: "赛娜", type: "complex", hasSpecialVoice: true,
        note: "复杂关系。赛娜的灵魂曾被锤石囚禁在灯笼里多年，但赛娜也在灯笼里获得了新的力量。两人之间有一种奇特的共生关系。" },
      { target: "佛耶戈", type: "complex", hasSpecialVoice: true,
        note: "锤石与佛耶戈互相利用。锤石想获得更强大的灵魂，佛耶戈想找回妻子。" },
      { target: "莫德凯撒", type: "complex", note: "两个亡灵之间的博弈。" }
    ]
  },
  "卢锡安": {
    relations: [
      { target: "赛娜", type: "lover", hasSpecialVoice: true,
        note: "夫妻。卢锡安和赛娜是光明哨兵的搭档，也是恋人。赛娜被锤石囚禁后，卢锡安拼命营救，最终两人团聚。" },
      { target: "锤石", type: "sworn_enemy", hasSpecialVoice: true,
        note: "杀父/囚禁妻子之仇，不共戴天。" },
      { target: "佛耶戈", type: "sworn_enemy", hasSpecialVoice: true,
        note: "光明哨兵 vs 破败之王。" },
      { target: "塞纳", type: "lover", note: "夫妻。" }
    ]
  },
  "赛娜": {
    relations: [
      { target: "卢锡安", type: "lover", hasSpecialVoice: true,
        note: "夫妻。光明哨兵的搭档和恋人。" },
      { target: "锤石", type: "complex", hasSpecialVoice: true,
        note: "复杂关系。赛娜的灵魂曾被锤石囚禁多年，但她也在灯笼里获得了新的力量和视角。" },
      { target: "佛耶戈", type: "sworn_enemy", note: "光明哨兵领袖 vs 破败之王。" }
    ]
  },
  "卡莉丝塔": {
    relations: [
      { target: "赫卡里姆", type: "sworn_enemy", hasSpecialVoice: true,
        note: "卡莉丝塔曾是福光岛的将军，赫卡里姆是她的部下。赫卡里姆背叛并杀死了卡莉丝塔，导致了破败之咒的发生。" },
      { target: "佛耶戈", type: "enemy", note: "卡莉丝塔被佛耶戈的破败之咒所困。" }
    ]
  },
  "赫卡里姆": {
    relations: [
      { target: "卡莉丝塔", type: "sworn_enemy", hasSpecialVoice: true,
        note: "曾经的部下与将军，现在的死敌。赫卡里姆的背叛是破败之咒的直接原因之一。" }
    ]
  },
  "约里克": {
    relations: [
      { target: "佛耶戈", type: "enemy", note: "约里克是暗影岛上少数还有人性的亡灵，他想拯救暗影岛。" },
      { target: "锤石", type: "enemy", note: "两个亡灵，理念不同。" }
    ]
  },

  // ========== 弗雷尔卓德阵营 ==========
  "艾希": {
    relations: [
      { target: "泰达米尔", type: "lover", hasSpecialVoice: true,
        note: "夫妻。艾希是阿瓦罗萨部落的女王，泰达米尔是蛮族之王。两人因政治联姻结合，但逐渐产生了真挚的感情。" },
      { target: "瑟庄妮", type: "sworn_enemy", hasSpecialVoice: true,
        note: "曾经的姐妹，现在的死敌。艾希主张和平统一，瑟庄妮主张武力征服。两人是弗雷尔卓德三大部落中两个的领袖，理念完全对立。" },
      { target: "丽桑卓", type: "sworn_enemy", hasSpecialVoice: true,
        note: "艾希是阿瓦罗萨的转世，丽桑卓是三姐妹中的老幺。两人是宿敌，丽桑卓是冰霜监视者的信徒，艾希则代表了反抗。" },
      { target: "布隆", type: "ally", note: "布隆支持艾希的理念。" },
      { target: "艾尼维亚", type: "ally", note: "冰鸟是弗雷尔卓德的守护神。" }
    ]
  },
  "泰达米尔": {
    relations: [
      { target: "艾希", type: "lover", hasSpecialVoice: true,
        note: "夫妻。蛮族之王与阿瓦罗萨女王。" },
      { target: "瑟庄妮", type: "enemy", note: "不同部落的对立。" }
    ]
  },
  "瑟庄妮": {
    relations: [
      { target: "艾希", type: "sworn_enemy", hasSpecialVoice: true,
        note: "曾经的姐妹，现在的死敌。瑟庄妮认为艾希的和平理念软弱，主张用武力统一弗雷尔卓德。" },
      { target: "丽桑卓", type: "enemy", note: "与冰霜守卫的对立。" },
      { target: "塞拉斯", type: "ally", note: "塞拉斯逃到弗雷尔卓德后，与瑟庄妮结盟。" },
      { target: "奥拉夫", type: "ally", note: "奥拉夫加入了瑟庄妮的队伍。" }
    ]
  },
  "丽桑卓": {
    relations: [
      { target: "艾希", type: "sworn_enemy", hasSpecialVoice: true,
        note: "丽桑卓是弗雷尔卓德三姐妹中最年轻的一个，也是活最久的。她是冰霜监视者的信徒，一直在暗中操纵弗雷尔卓德的历史。" },
      { target: "艾尼维亚", type: "sworn_enemy", note: "冰鸟与丽桑卓的对立。" },
      { target: "沃利贝尔", type: "enemy", note: "熊人族与冰霜守卫的对立。" },
      { target: "奥恩", type: "enemy", note: "奥恩不喜欢丽桑卓。" }
    ]
  },
  "布隆": {
    relations: [
      { target: "艾希", type: "ally", note: "布隆支持艾希。" },
      { target: "阿利斯塔", type: "friend", note: "两位壮汉的友谊。" }
    ]
  },
  "奥恩": {
    relations: [
      { target: "沃利贝尔", type: "family", hasSpecialVoice: true,
        note: "亲兄弟。奥恩是大哥，沃利贝尔是弟弟。两人都是半神，但理念完全不同：奥恩喜欢安静打铁，沃利贝尔喜欢战争征服。" },
      { target: "艾尼维亚", type: "ally", note: "弗雷尔卓德的半神们。" },
      { target: "丽桑卓", type: "enemy", note: "奥恩不喜欢丽桑卓的虚伪。" }
    ]
  },
  "沃利贝尔": {
    relations: [
      { target: "奥恩", type: "family", hasSpecialVoice: true,
        note: "亲兄弟。沃利贝尔是弟弟，好战的半神。他对哥哥奥恩的避世态度不满。" },
      { target: "丽桑卓", type: "enemy", note: "熊人族痛恨冰霜守卫。" }
    ]
  },
  "艾尼维亚": {
    relations: [
      { target: "丽桑卓", type: "sworn_enemy", note: "冰凤与冰霜女巫的对抗。" },
      { target: "艾希", type: "ally", note: "艾希是阿瓦罗萨的转世，艾尼维亚支持她。" }
    ]
  },
  "乌迪尔": {
    relations: [
      { target: "李青", type: "best_friend", note: "两位兽灵行者/武僧的友谊。" },
      { target: "瑟庄妮", type: "ally", note: "乌迪尔加入了凛冬之爪。" }
    ]
  },

  // ========== 恕瑞玛阵营 ==========
  "阿兹尔": {
    relations: [
      { target: "泽拉斯", type: "complex", hasSpecialVoice: true,
        note: "曾经的挚友，现在的宿敌。阿兹尔是恕瑞玛末代皇帝，泽拉斯是他的奴隶和挚友。阿兹尔承诺给泽拉斯自由，但在登基仪式上发生了误会，泽拉斯引发了恕瑞玛的毁灭。两人的关系是恕瑞玛故事的核心。" },
      { target: "内瑟斯", type: "mentor", note: "狗头是阿兹尔的导师。" },
      { target: "雷克顿", type: "enemy", note: "鳄鱼被泽拉斯腐化了。" },
      { target: "希维尔", type: "family", note: "希维尔是阿兹尔的后裔。" }
    ]
  },
  "泽拉斯": {
    relations: [
      { target: "阿兹尔", type: "complex", hasSpecialVoice: true,
        note: "曾经的挚友，现在的死敌。泽拉斯因爱生恨，他为阿兹尔付出了一切，但阿兹尔的'自由'承诺来得太晚了。恕瑞玛的毁灭是两人共同的悲剧。" },
      { target: "内瑟斯", type: "sworn_enemy", note: "泽拉斯与狗头的对抗。" },
      { target: "雷克顿", type: "complex", note: "泽拉斯腐化了鳄鱼，利用他对付狗头。" }
    ]
  },
  "内瑟斯": {
    relations: [
      { target: "雷克顿", type: "family", hasSpecialVoice: true,
        note: "亲兄弟。内瑟斯是哥哥，雷克顿是弟弟。两人都是恕瑞玛的飞升者。但雷克顿被泽拉斯腐化，变得疯狂，兄弟反目。内瑟斯不得不亲手封印弟弟。" },
      { target: "泽拉斯", type: "sworn_enemy", note: "泽拉斯腐化了他的弟弟。" },
      { target: "阿兹尔", type: "mentor", note: "狗头是皇帝的导师。" }
    ]
  },
  "雷克顿": {
    relations: [
      { target: "内瑟斯", type: "family", hasSpecialVoice: true,
        note: "亲兄弟。鳄鱼曾是恕瑞玛的英雄，但被泽拉斯的力量腐蚀后变得疯狂。他认为哥哥抛弃了自己，对内瑟斯怀有深仇大恨。" },
      { target: "泽拉斯", type: "complex", note: "被泽拉斯腐化，既恨他又依赖他。" }
    ]
  },
  "希维尔": {
    relations: [
      { target: "阿兹尔", type: "family", note: "希维尔是阿兹尔的后裔，恕瑞玛的血脉。" },
      { target: "卡西奥佩娅", type: "enemy", note: "卡西奥佩娅曾利用希维尔。" }
    ]
  },
  "卡莎": {
    relations: [
      { target: "卡萨丁", type: "family", hasSpecialVoice: true,
        note: "父女。卡萨丁是卡莎的父亲，他进入虚空寻找失踪的女儿。卡莎在虚空中独自生存了多年，最终逃了出来。两人都在寻找对方。" },
      { target: "玛尔扎哈", type: "sworn_enemy", note: "玛尔扎哈是虚空先知，是卡萨丁的仇人，也是卡莎的敌人。" }
    ]
  },
  "卡萨丁": {
    relations: [
      { target: "卡莎", type: "family", hasSpecialVoice: true,
        note: "父女。卡萨丁为了救女儿，踏入虚空，获得了虚空行者的力量。" },
      { target: "玛尔扎哈", type: "sworn_enemy", hasSpecialVoice: true,
        note: "玛尔扎哈的献祭导致卡萨丁的女儿被虚空吞噬。卡萨丁立誓报仇。" }
    ]
  },
  "玛尔扎哈": {
    relations: [
      { target: "卡萨丁", type: "sworn_enemy", hasSpecialVoice: true,
        note: "虚空先知 vs 虚空行者。玛尔扎哈是虚空的信徒，卡萨丁是虚空的复仇者。" },
      { target: "卡莎", type: "enemy", note: "卡莎是他计划的一部分。" }
    ]
  },

  // ========== 巨神峰阵营 ==========
  "蕾欧娜": {
    relations: [
      { target: "黛安娜", type: "sworn_enemy", hasSpecialVoice: true,
        note: "曾经的姐妹，现在的死敌。蕾欧娜是烈阳教派的领袖，黛安娜是皎月教派的信徒。两人理念对立：烈阳代表秩序和光明，皎月代表自由和黑暗。但她们本应是一体两面。" },
      { target: "潘森", type: "ally", note: "同属巨神峰。" },
      { target: "佐伊", type: "enemy", note: "佐伊是暮光星灵，调皮捣蛋。" }
    ]
  },
  "黛安娜": {
    relations: [
      { target: "蕾欧娜", type: "sworn_enemy", hasSpecialVoice: true,
        note: "曾经的姐妹，现在的死敌。黛安娜发现了皎月教派的真相，却被烈阳教派追杀。她反抗蕾欧娜的权威，追求自己的信念。" },
      { target: "潘森", type: "enemy", note: "潘森代表烈阳。" }
    ]
  },
  "潘森": {
    relations: [
      { target: "蕾欧娜", type: "ally", note: "烈阳战士。" },
      { target: "黛安娜", type: "enemy", note: "皎月与烈阳的对立。" },
      { target: "奥瑞利安索尔", type: "enemy", note: "星灵与铸星龙王。" }
    ]
  },
  "佐伊": {
    relations: [
      { target: "奥瑞利安索尔", type: "complex", note: "暮光星灵与铸星龙王，两个宇宙级存在。" },
      { target: "蕾欧娜", type: "enemy", note: "佐伊喜欢恶作剧。" }
    ]
  },
  "奥瑞利安索尔": {
    relations: [
      { target: "佐伊", type: "complex", note: "铸星龙王被星灵们欺骗和囚禁。" },
      { target: "潘森", type: "enemy", note: "巨神峰的星灵们奴役了索尔。" }
    ]
  },
  "索拉卡": {
    relations: [
      { target: "沃里克", type: "complex", note: "索拉卡曾诅咒沃里克，后来又后悔了。" }
    ]
  },
  "塔里克": {
    relations: [
      { target: "嘉文四世", type: "friend", note: "曾是嘉文的护卫。" }
    ]
  },

  // ========== 比尔吉沃特阵营 ==========
  "厄运小姐": {
    relations: [
      { target: "崔斯特", type: "complex", hasSpecialVoice: true,
        note: "复杂的恋人关系。厄运小姐和崔斯特是老情人，分分合合。两人互相利用，但也有真感情。" },
      { target: "格雷福斯", type: "friend", note: "比尔吉沃特的朋友们。" },
      { target: "派克", type: "sworn_enemy", hasSpecialVoice: true,
        note: "派克是被比尔吉沃特人背叛的水手，变成了亡魂回来复仇。厄运小姐是赏金猎人，专门猎杀派克。" },
      { target: "诺提勒斯", type: "enemy", note: "深海泰坦是比尔吉沃特的传说。" }
    ]
  },
  "崔斯特": {
    relations: [
      { target: "格雷福斯", type: "best_friend", hasSpecialVoice: true,
        note: "最好的朋友，也是曾经的同伙。两人一起作案多年，后来因为一次背叛反目成仇，多年后又和解。是英雄联盟最经典的兄弟情之一。" },
      { target: "厄运小姐", type: "complex", hasSpecialVoice: true,
        note: "老情人，分分合合。" },
      { target: "乐芙兰", type: "enemy", note: "崔斯特曾与黑色玫瑰有过节。" }
    ]
  },
  "格雷福斯": {
    relations: [
      { target: "崔斯特", type: "best_friend", hasSpecialVoice: true,
        note: "最好的朋友。男枪和卡牌的故事是英雄联盟最经典的兄弟情：一起混、一起坐牢、反目成仇、最终和解。" },
      { target: "厄运小姐", type: "friend", note: "比尔吉沃特的朋友们。" }
    ]
  },
  "派克": {
    relations: [
      { target: "厄运小姐", type: "sworn_enemy", hasSpecialVoice: true,
        note: "派克向比尔吉沃特的船长们复仇，厄运小姐是赏金猎人，专门猎杀他。" },
      { target: "诺提勒斯", type: "friend", note: "两个来自深海的怨灵。" }
    ]
  },

  // ========== 其他重要关系 ==========
  "瑞兹": {
    relations: [
      { target: "伊泽瑞尔", type: "friend", note: "两位旅行者。" },
      { target: "亚索", type: "friend", note: "瑞兹曾指点亚索。" }
    ]
  },
  "基兰": {
    relations: [
      { target: "艾尼维亚", type: "friend", note: "时间与冰的守护。" }
    ]
  },
  "安妮": {
    relations: [
      { target: "阿木木", type: "friend", note: "两个孤独的孩子。" }
    ]
  },
  "阿木木": {
    relations: [
      { target: "安妮", type: "friend", note: "悲伤的木乃伊和玩火的小女孩。" }
    ]
  },
  "洛": {
    relations: [
      { target: "霞", type: "lover", hasSpecialVoice: true,
        note: "官方CP，英雄联盟最甜的情侣。洛是幻翎，霞是逆羽，瓦斯塔亚的战士情侣。两人出场就是情侣，游戏中有大量甜蜜的互动语音。" },
      { target: "阿狸", type: "friend", note: "瓦斯塔亚同胞。" },
      { target: "妮蔻", type: "friend", note: "瓦斯塔亚同胞。" }
    ]
  },
  "霞": {
    relations: [
      { target: "洛", type: "lover", hasSpecialVoice: true,
        note: "官方CP。逆羽和幻翎，瓦斯塔亚的战士情侣。" },
      { target: "阿狸", type: "friend", note: "瓦斯塔亚同胞。" }
    ]
  },
  "妮蔻": {
    relations: [
      { target: "阿狸", type: "friend", note: "瓦斯塔亚同胞。" },
      { target: "洛", type: "friend", note: "瓦斯塔亚同胞。" },
      { target: "霞", type: "friend", note: "瓦斯塔亚同胞。" }
    ]
  },
  "卡兹克": {
    relations: [
      { target: "雷恩加尔", type: "sworn_enemy", hasSpecialVoice: true,
        note: "虚空掠夺者 vs 傲之追猎者。经典的宿敌关系。卡兹克想进化，雷恩加尔想狩猎最强的猎物。两人是彼此的终极目标。游戏中有特殊彩蛋：双方都达到16级后会触发狩猎任务。" }
    ]
  },
  "雷恩加尔": {
    relations: [
      { target: "卡兹克", type: "sworn_enemy", hasSpecialVoice: true,
        note: "傲之追猎者 vs 虚空掠夺者。雷恩加尔的一只眼睛就是被卡兹克弄瞎的。两人是彼此的终极猎物。" }
    ]
  },
  "薇古丝": {
    relations: [
      { target: "佛耶戈", type: "complex", note: "薇古丝帮了佛耶戈，但只是因为觉得有趣。" }
    ]
  }
};

// 复杂关系说明
window.RELATION_NOTES = {
  "background": "英雄联盟的世界观是逐步构建的。最初只有少数英雄，每次出新英雄都会补充相关联的故事线，让整个符文之地的历史越来越丰满。很多英雄之间都有千丝万缕的联系——宿敌、挚友、恋人、家人，共同编织了这个宏大的宇宙。",
  "complex_relations": [
    "盖伦 & 卡特琳娜：宿敌与绯闻并存，战场上的对手，坊间的传说",
    "劫 & 慎：曾经的师兄弟，现在不共戴天的死敌",
    "亚索 & 锐雯：血海深仇与宿命纠缠的复杂交织",
    "蔚 & 金克丝：亲姐妹相爱相杀，双城之战的核心",
    "杰斯 & 维克托：曾经的挚友，现在的理念宿敌",
    "阿兹尔 & 泽拉斯：从主仆到挚友到死敌的悲剧",
    "佛耶戈 & 格温：亡妻的造物，是爱还是执念？",
    "内瑟斯 & 雷克顿：亲兄弟被外力腐化，最终反目",
    "卢锡安 & 锤石 & 赛娜：三人之间复杂的爱恨纠葛",
    "艾希 & 瑟庄妮：曾经的姐妹，现在的部落死敌"
  ]
};
