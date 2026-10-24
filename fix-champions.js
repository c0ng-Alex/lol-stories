const fs = require('fs');

// 读取champions-data.js
const champContent = fs.readFileSync('./champions-data.js', 'utf-8');

// 解析所有英雄对象
const CHAMPIONS = [];
let currentObj = '';
let braceCount = 0;
let inArray = false;
let capturing = false;

const lines = champContent.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('const CHAMPIONS = [')) {
    inArray = true;
    continue;
  }
  
  if (!inArray) continue;
  if (line.trim() === '];') break;
  
  if (line.trim().startsWith('{ name:')) {
    capturing = true;
    currentObj = '';
    braceCount = 0;
  }
  
  if (capturing) {
    currentObj += line + '\n';
    for (const ch of line) {
      if (ch === '{') braceCount++;
      if (ch === '}') braceCount--;
    }
    
    if (braceCount === 0 && currentObj.trim().startsWith('{')) {
      try {
        const obj = eval('(' + currentObj.trim().replace(/,$/, '') + ')');
        CHAMPIONS.push(obj);
      } catch(e) {}
      capturing = false;
    }
  }
}

console.log('原始:', CHAMPIONS.length, '位');

// 去重（按name），保留第一个
const seen = new Map();
for (const champ of CHAMPIONS) {
  if (!seen.has(champ.name)) {
    seen.set(champ.name, champ);
  }
}

// 合并塞娜和赛娜（都是Senna），保留赛娜
if (seen.has('塞娜') && seen.has('赛娜')) {
  seen.delete('塞娜');
  console.log('合并: 塞娜 -> 赛娜');
}

const uniqueChamps = Array.from(seen.values());
console.log('去重+合并后:', uniqueChamps.length, '位');

// 读取stories-data.js获取英雄名
const storiesContent = fs.readFileSync('./stories-data.js', 'utf-8');
const storyMatches = storiesContent.match(/"([^"]+)": \{/g);
const storyNames = storyMatches ? storyMatches.map(m => m.replace(/": \{/, '').replace(/"/g, '')) : [];
console.log('stories:', storyNames.length, '位');

// 找出stories里有但champions里没有的
const champNameSet = new Set(uniqueChamps.map(c => c.name));
const missing = storyNames.filter(n => !champNameSet.has(n));
console.log('缺失的英雄:', missing);

// 需要添加的英雄基础数据
const newChampions = [
  { name: "嘉文四世", title: "德玛西亚皇子", alias: "JarvanIV", region: "德玛西亚", roles: ["战士", "坦克"],
    lore: "德玛西亚的皇子，光盾家族的继承人，在战场上英勇无畏，誓要守护德玛西亚的荣耀。",
    color: "#1e3a5f" },
  { name: "迦娜", title: "风暴之怒", alias: "Janna", region: "符文之地", roles: ["辅助", "法师"],
    lore: "掌控风之力量的古老精灵，守护着祖安的人民，用风暴庇护弱者。",
    color: "#87ceeb" },
  { name: "佛耶戈", title: "破败之王", alias: "Viego", region: "暗影岛", roles: ["战士", "刺客"],
    lore: "曾经的卡玛维亚国王，因失去挚爱而疯狂，化为破败之咒的源头，游荡在暗影岛寻找亡妻。",
    color: "#006400" },
  { name: "米利欧", title: "明烛", alias: "Milio", region: "以绪塔尔", roles: ["辅助"],
    lore: "来自以绪塔尔的少年，拥有治愈之火的天赋，用温暖的火焰守护家人和朋友。",
    color: "#ffd700" },
  { name: "贾克斯", title: "武器大师", alias: "Jax", region: "符文之地", roles: ["战士", "刺客"],
    lore: "艾卡西亚最后的守望者，手持神秘灯笼武器，在召唤师峡谷挑战所有强者，无人能敌。",
    color: "#8b4513" },
];

// 添加缺失的英雄
for (const newChamp of newChampions) {
  if (!champNameSet.has(newChamp.name)) {
    uniqueChamps.push(newChamp);
    console.log('添加:', newChamp.name);
  }
}

console.log('添加后:', uniqueChamps.length, '位');

// 如果还不够175位，检查一下还缺谁
const targetCount = 175;
if (uniqueChamps.length < targetCount) {
  console.log(`还缺 ${targetCount - uniqueChamps.length} 位英雄`);
}

// 按字母顺序排序（按alias）
uniqueChamps.sort((a, b) => a.alias.localeCompare(b.alias));

// 生成新的champions-data.js
let output = '// 英雄联盟全英雄数据 - 完整' + uniqueChamps.length + '位英雄\n';
output += '// 头像CDN: https://game.gtimg.cn/images/lol/act/img/champion/{alias}.png\n\n';
output += 'const CHAMPIONS = [\n';

for (let i = 0; i < uniqueChamps.length; i++) {
  const c = uniqueChamps[i];
  const rolesStr = JSON.stringify(c.roles);
  const comma = i < uniqueChamps.length - 1 ? ',' : '';
  output += `  { name: "${c.name}", title: "${c.title}", alias: "${c.alias}", region: "${c.region}", roles: ${rolesStr},\n`;
  output += `    lore: "${c.lore}",\n`;
  output += `    color: "${c.color}" }${comma}\n`;
}

output += '];\n\n';
output += 'function getChampionAvatar(alias) {\n';
output += '  return `https://game.gtimg.cn/images/lol/act/img/champion/${alias}.png`;\n';
output += '}\n\n';
output += 'const REGIONS = ["全部地区", "艾欧尼亚", "德玛西亚", "诺克萨斯", "弗雷尔卓德", "皮尔特沃夫", "祖安", "恕瑞玛", "巨神峰", "暗影岛", "比尔吉沃特", "虚空之地", "以绪塔尔", "班德尔城", "符文之地"];\n';

fs.writeFileSync('./champions-data.js', output, 'utf-8');
console.log('已写入 champions-data.js, 共', uniqueChamps.length, '位英雄');
