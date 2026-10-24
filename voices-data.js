// 英雄语音数据 - 精选经典台词
// 格式：{ 英雄名: { voiceCount: 数量, lines: [ { text: "台词", type: "类型", audio: "音频路径" } ] } }
// 音频文件放在 voices/ 文件夹下，命名规则：英雄名_编号.mp3，如：盖伦_1.mp3
// 有音频文件时播放真实语音，没有时自动用文字模拟模式
window.HERO_VOICES = {
    "盖伦": {
        voiceCount: 6,
        lines: [
            { text: "人在塔在！", type: "选择", audio: "voices/盖伦_choose.ogg" },
            { text: "德玛西亚万岁！", type: "嘲讽", audio: "voices/盖伦_ban.ogg" },
            { text: "我将带头冲锋！", type: "行动" },
            { text: "邪恶祸殃，必将终结。", type: "移动" },
            { text: "勇往直前！", type: "移动" },
            { text: "不要退缩！", type: "行动" }
        ]
    },
    "亚索": {
        voiceCount: 7,
        lines: [
            { text: "死亡如风，常伴吾身。", type: "选择", audio: "voices/亚索_choose.ogg" },
            { text: "长路漫漫，唯剑作伴。", type: "移动", audio: "voices/亚索_ban.ogg" },
            { text: "吾之荣耀，离别已久。", type: "移动" },
            { text: "面对疾风吧！", type: "技能" },
            { text: "想杀我？你可以试试。", type: "嘲讽" },
            { text: "且随疾风前行，身后亦须留心。", type: "移动" },
            { text: "正义，好个冠冕堂皇之词。", type: "嘲讽" }
        ]
    },
    "金克丝": {
        voiceCount: 7,
        lines: [
            { text: "金克丝的含义就是金克丝！", type: "选择", audio: "voices/金克丝_choose.ogg" },
            { text: "我现在在哪？不重要，我在搞破坏！", type: "移动", audio: "voices/金克丝_ban.ogg" },
            { text: "嘿嘿嘿，来玩吧！", type: "移动" },
            { text: "你是我的了！", type: "行动" },
            { text: "再见啦！", type: "击杀" },
            { text: "我疯了，有医生吗？", type: "嘲讽" },
            { text: "站那儿别动，我在瞄准你呢！", type: "行动" }
        ]
    },
    "拉克丝": {
        voiceCount: 6,
        lines: [
            { text: "照亮前路！", type: "选择", audio: "voices/拉克丝_choose.ogg" },
            { text: "我会调查的。", type: "移动", audio: "voices/拉克丝_ban.ogg" },
            { text: "保持警惕！", type: "移动" },
            { text: "德玛西亚！", type: "行动" },
            { text: "光芒四射！", type: "技能" },
            { text: "这个我能搞定！", type: "移动" }
        ]
    },
    "劫": {
        voiceCount: 6,
        lines: [
            { text: "无形之刃，最为致命。", type: "选择", audio: "voices/劫_choose.ogg" },
            { text: "保守秘密，就如同浪费武器。", type: "移动", audio: "voices/劫_ban.ogg" },
            { text: "暗影，启发了我。", type: "移动" },
            { text: "禁奥义！瞬狱影杀阵！", type: "大招" },
            { text: "没有人可以逃离他们的影子。", type: "嘲讽" },
            { text: "无知者，在劫难逃。", type: "击杀" }
        ]
    },
    "艾希": {
        voiceCount: 5,
        lines: [
            { text: "明智之选。", type: "选择", audio: "voices/艾希_choose.ogg" },
            { text: "我们必须向前推进。", type: "移动", audio: "voices/艾希_ban.ogg" },
            { text: "瞄准目标，放箭！", type: "行动" },
            { text: "冰霜正监视着你。", type: "嘲讽" },
            { text: "弗雷尔卓德的寒风，会穿透你的骨头。", type: "嘲讽" }
        ]
    },
    "锐雯": {
        voiceCount: 6,
        lines: [
            { text: "断剑重铸之日，骑士归来之时。", type: "选择", audio: "voices/锐雯_choose.ogg" },
            { text: "我已经流浪了如此之久。", type: "移动", audio: "voices/锐雯_ban.ogg" },
            { text: "我该怎样继续前行？", type: "移动" },
            { text: "我的双手沾满了罪孽。", type: "移动" },
            { text: "前车之鉴，后车之师。", type: "移动" },
            { text: "他们越强大，我越要打得他们落花流水。", type: "嘲讽" }
        ]
    },
    "卡特琳娜": {
        voiceCount: 6,
        lines: [
            { text: "我已经做出了我的选择。", type: "选择", audio: "voices/卡特琳娜_choose.ogg" },
            { text: "诺克萨斯万岁！", type: "行动", audio: "voices/卡特琳娜_ban.ogg" },
            { text: "暴力可以解决一切。", type: "移动" },
            { text: "我闻到的是恐惧吗？", type: "嘲讽" },
            { text: "准备好应付麻烦了吗？", type: "移动" },
            { text: "为什么？因为我能。", type: "嘲讽" }
        ]
    },
    "维克兹": {
        voiceCount: 5,
        lines: [
            { text: "一个简单的东西，也值得研究。", type: "选择" },
            { text: "我已经发现了你的弱点。", type: "移动" },
            { text: "你身上有好多有趣的地方。", type: "移动" },
            { text: "知识来源于分解。", type: "击杀" },
            { text: "研究，解剖，学习！", type: "技能" }
        ]
    },
    "李青": {
        voiceCount: 5,
        lines: [
            { text: "双目失明，不影响我找出真相。", type: "选择", audio: "voices/李青_choose.ogg" },
            { text: "我用双手成就你的梦想。", type: "选择", audio: "voices/李青_ban.ogg" },
            { text: "保持警惕。", type: "移动" },
            { text: "如果暴力不是为了杀戮，那就毫无意义。", type: "嘲讽" },
            { text: "一库！", type: "技能" }
        ]
    },
    "蔚": {
        voiceCount: 6,
        lines: [
            { text: "先打一拳，打的时候再把问题问遍。", type: "选择", audio: "voices/蔚_choose.ogg" },
            { text: "哼，小菜一碟！", type: "行动", audio: "voices/蔚_ban.ogg" },
            { text: "我讨厌废话。", type: "移动" },
            { text: "来玩啊！", type: "嘲讽" },
            { text: "吃我一记重拳！", type: "技能" },
            { text: "暴力可以解决一切问题。", type: "行动" }
        ]
    },
    "凯特琳": {
        voiceCount: 5,
        lines: [
            { text: "想看帽子戏法吗？", type: "选择", audio: "voices/凯特琳_choose.ogg" },
            { text: "我去前面探探路。", type: "移动", audio: "voices/凯特琳_ban.ogg" },
            { text: "砰！正中靶心。", type: "击杀" },
            { text: "一码归一码。", type: "移动" },
            { text: "一颗子弹，一个目标。", type: "技能" }
        ]
    },
    "杰斯": {
        voiceCount: 6,
        lines: [
            { text: "为了更美好的明天而战！", type: "选择", audio: "voices/杰斯_choose.ogg" },
            { text: "我将照亮前进的路。", type: "移动", audio: "voices/杰斯_ban.ogg" },
            { text: "面对未来吧！", type: "技能" },
            { text: "永远别回头。", type: "移动" },
            { text: "是时候进行修正了。", type: "行动" },
            { text: "能量充盈，全速前进！", type: "移动" }
        ]
    },
    "德莱厄斯": {
        voiceCount: 6,
        lines: [
            { text: "只有我才能带领我们走向胜利。", type: "选择", audio: "voices/德莱厄斯_choose.ogg" },
            { text: "他们将后悔与我为敌。", type: "移动", audio: "voices/德莱厄斯_ban.ogg" },
            { text: "诺克萨斯即将崛起！", type: "行动" },
            { text: "不要犯任何错误。", type: "移动" },
            { text: "保持警惕。", type: "移动" },
            { text: "杀出一条血路！", type: "技能" }
        ]
    },
    "阿狸": {
        voiceCount: 6,
        lines: [
            { text: "我们心有灵犀，不是吗？", type: "选择", audio: "voices/阿狸_choose.ogg" },
            { text: "他们可抵挡不了我的魅力。", type: "移动", audio: "voices/阿狸_ban.ogg" },
            { text: "请宠爱我吧~", type: "嘲讽" },
            { text: "你爱我吗？", type: "嘲讽" },
            { text: "想和我玩吗？可别怪我的尾巴无情哦~", type: "嘲讽" },
            { text: "我们去找点真正的乐子吧。", type: "移动" }
        ]
    },
    "伊泽瑞尔": {
        voiceCount: 6,
        lines: [
            { text: "是时候表演真正的技术了！", type: "选择", audio: "voices/伊泽瑞尔_choose.ogg" },
            { text: "全凭直觉。", type: "移动", audio: "voices/伊泽瑞尔_ban.ogg" },
            { text: "在别的游戏里，像我这么帅的一般都是主角哦！", type: "嘲讽" },
            { text: "我从不逃跑，只不过是战略性撤退。", type: "移动" },
            { text: "该出击了！", type: "行动" },
            { text: "探险家就是要到处看看。", type: "移动" }
        ]
    },
    "薇恩": {
        voiceCount: 6,
        lines: [
            { text: "让我们来猎杀那些陷入黑暗中的人吧。", type: "选择", audio: "voices/薇恩_choose.ogg" },
            { text: "黑夜也会怕我。", type: "移动", audio: "voices/薇恩_ban.ogg" },
            { text: "浸泡在圣银中！", type: "技能" },
            { text: "我没有时间废话。", type: "嘲讽" },
            { text: "趁黑出动。", type: "移动" },
            { text: "邪恶将被净化。", type: "行动" }
        ]
    },
    "卡莎": {
        voiceCount: 6,
        lines: [
            { text: "我回来了，也变强了。", type: "选择", audio: "voices/卡莎_choose.ogg" },
            { text: "在虚空里待了那么久，我学到了一件事：活下去。", type: "移动", audio: "voices/卡莎_ban.ogg" },
            { text: "我在猎杀他们之前，他们已经是猎物了。", type: "嘲讽" },
            { text: "这身皮肤，既是诅咒，也是武器。", type: "移动" },
            { text: "标记猎物。", type: "技能" },
            { text: "我绝不退缩。", type: "行动" }
        ]
    },
    "阿卡丽": {
        voiceCount: 6,
        lines: [
            { text: "我随影而来，随影而去。", type: "选择", audio: "voices/阿卡丽_choose.ogg" },
            { text: "均衡只是一个谎言，我们才是真正的忍者。", type: "移动", audio: "voices/阿卡丽_ban.ogg" },
            { text: "菜鸟真多，匹配系统能找到真正的平衡吗？", type: "嘲讽" },
            { text: "动作要快！", type: "行动" },
            { text: "荣耀剑下取，均衡乱中求。", type: "移动" },
            { text: "暗影之拳在行动。", type: "行动" }
        ]
    },
    "锤石": {
        voiceCount: 7,
        lines: [
            { text: "我们要怎样进行这令人愉悦的折磨呢？", type: "选择", audio: "voices/锤石_choose.ogg" },
            { text: "灵魂的价值是什么？", type: "移动", audio: "voices/锤石_ban.ogg" },
            { text: "啊，多么美妙的苦难。", type: "嘲讽" },
            { text: "你，属于我。", type: "技能" },
            { text: "没有人能逃脱我的掌控。", type: "移动" },
            { text: "再来一个灵魂，灯笼就更亮一些。", type: "移动" },
            { text: "乖乖就范吧。", type: "行动" }
        ]
    },
    "卢锡安": {
        voiceCount: 6,
        lines: [
            { text: "她曾是我的全部，但他们带走了她。", type: "选择", audio: "voices/卢锡安_choose.ogg" },
            { text: "死亡，是唯一的永恒。", type: "移动", audio: "voices/卢锡安_ban.ogg" },
            { text: "圣光，赐予我力量吧！", type: "技能" },
            { text: "没有什么可以阻挡我。", type: "嘲讽" },
            { text: "我应该早点下手的。", type: "移动" },
            { text: "继续前进。", type: "行动" }
        ]
    },
    "塞拉斯": {
        voiceCount: 6,
        lines: [
            { text: "他们以为锁链能困住我，他们大错特错。", type: "选择", audio: "voices/塞拉斯_choose.ogg" },
            { text: "德玛西亚，你的时代结束了！", type: "嘲讽", audio: "voices/塞拉斯_ban.ogg" },
            { text: "以彼之道，还施彼身。", type: "技能" },
            { text: "自由，是用鲜血换来的。", type: "移动" },
            { text: "革命，势在必行。", type: "行动" },
            { text: "枷锁已断，我已重生。", type: "移动" }
        ]
    },
    "佐伊": {
        voiceCount: 7,
        lines: [
            { text: "嗨，大家好！我是佐伊！", type: "选择", audio: "voices/佐伊_choose.ogg" },
            { text: "时间到了吗？我还没玩够呢！", type: "移动", audio: "voices/佐伊_ban.ogg" },
            { text: "我可以亲你一下吗？嘭！你就睡着了！", type: "嘲讽" },
            { text: "泡泡！", type: "技能" },
            { text: "哇哦，那是什么？看起来好有意思！", type: "移动" },
            { text: "我可是暮光星灵哦！", type: "移动" },
            { text: "再来一次再来一次！", type: "行动" }
        ]
    },
    "厄斐琉斯": {
        voiceCount: 5,
        lines: [
            { text: "（沉默...）", type: "选择", audio: "voices/厄斐琉斯_choose.ogg" },
            { text: "武器在手，使命在肩。", type: "移动", audio: "voices/厄斐琉斯_ban.ogg" },
            { text: "拉露恩，我听到了。", type: "移动" },
            { text: "五把武器，一个使命。", type: "行动" },
            { text: "皎月教派的意志，不可动摇。", type: "移动" }
        ]
    },
    "永恩": {
        voiceCount: 6,
        lines: [
            { text: "我曾追寻剑道，如今我即是剑道。", type: "选择", audio: "voices/永恩_choose.ogg" },
            { text: "弟弟，你选择的道路，我会替你走下去。", type: "移动", audio: "voices/永恩_ban.ogg" },
            { text: "封魔剑魂，永不言败。", type: "行动" },
            { text: "一剑封魔。", type: "技能" },
            { text: "心中有道，剑下无尘。", type: "移动" },
            { text: "恶鬼退散！", type: "行动" }
        ]
    },
    "莎弥拉": {
        voiceCount: 6,
        lines: [
            { text: "想要刺激？找我就对了！", type: "选择", audio: "voices/莎弥拉_choose.ogg" },
            { text: "越危险，越好玩！", type: "移动", audio: "voices/莎弥拉_ban.ogg" },
            { text: "就这点本事吗？我还没热身呢！", type: "嘲讽" },
            { text: "开火！", type: "技能" },
            { text: "沙漠玫瑰，从不凋谢。", type: "移动" },
            { text: "来场真正的战斗吧！", type: "行动" }
        ]
    },
    "佛耶戈": {
        voiceCount: 7,
        lines: [
            { text: "伊苏尔德...你在哪里？", type: "选择", audio: "voices/佛耶戈_choose.ogg" },
            { text: "没有她，世界了无生趣。", type: "移动", audio: "voices/佛耶戈_ban.ogg" },
            { text: "破败之王，万劫不复。", type: "嘲讽" },
            { text: "你的灵魂，归我了！", type: "技能" },
            { text: "千百年的等待，只为再见你一面。", type: "移动" },
            { text: "爱，是唯一的救赎。", type: "移动" },
            { text: "跪下！", type: "行动" }
        ]
    },
    "塞纳": {
        voiceCount: 6,
        lines: [
            { text: "我曾被暗影囚禁，如今我重获光明。", type: "选择", audio: "voices/塞纳_choose.ogg" },
            { text: "光明与暗影，我皆掌控。", type: "移动", audio: "voices/塞纳_ban.ogg" },
            { text: "你以为黑暗能困住我？", type: "嘲讽" },
            { text: "圣枪洗涤！", type: "技能" },
            { text: "卢锡安，我们一起战斗。", type: "移动" },
            { text: "希望，永不熄灭。", type: "行动" }
        ]
    },
    "派克": {
        voiceCount: 6,
        lines: [
            { text: "我从深处来，带来死亡。", type: "选择", audio: "voices/派克_choose.ogg" },
            { text: "名单上又多了一个名字。", type: "移动", audio: "voices/派克_ban.ogg" },
            { text: "跳下去，不然我把你扔下去。", type: "嘲讽" },
            { text: "命丧海底！", type: "技能" },
            { text: "血债血偿。", type: "移动" },
            { text: "一个都跑不掉。", type: "行动" }
        ]
    },
    "瑟庄妮": {
        voiceCount: 6,
        lines: [
            { text: "凛冬之怒，无人能挡！", type: "选择", audio: "voices/瑟庄妮_choose.ogg" },
            { text: "弗雷尔卓德的寒冬，由我带来。", type: "移动", audio: "voices/瑟庄妮_ban.ogg" },
            { text: "猪妹冲锋！", type: "行动" },
            { text: "在我面前颤抖吧！", type: "嘲讽" },
            { text: "北境之王，舍我其谁。", type: "移动" },
            { text: "冰封万物！", type: "技能" }
        ]
    },
    "卡尔玛": {
        voiceCount: 6,
        lines: [
            { text: "要永远相信你的灵魂。", type: "选择", audio: "voices/卡尔玛_choose.ogg" },
            { text: "艾欧尼亚，昂扬不灭！", type: "行动", audio: "voices/卡尔玛_ban.ogg" },
            { text: "战胜自己，方能战胜敌人。", type: "移动" },
            { text: "心灵之火，永不熄灭。", type: "移动" },
            { text: "和平，需要力量来守护。", type: "嘲讽" },
            { text: "灵能爆发！", type: "技能" }
        ]
    },
    "提莫": {
        voiceCount: 7,
        lines: [
            { text: "提莫队长正在待命！", type: "选择", audio: "voices/提莫_choose.ogg" },
            { text: "一！二！三！四！", type: "移动", audio: "voices/提莫_ban.ogg" },
            { text: "是，长官！", type: "行动" },
            { text: "我去前面探探路。", type: "移动" },
            { text: "体型并不能说明一切。", type: "嘲讽" },
            { text: "看到那个敌人了吗？踩一下！", type: "技能" },
            { text: "整装待发！", type: "行动" }
        ]
    },
    "安妮": {
        voiceCount: 7,
        lines: [
            { text: "你看见过我的小熊吗？", type: "选择", audio: "voices/安妮_choose.ogg" },
            { text: "我从来不玩火柴~", type: "移动", audio: "voices/安妮_ban.ogg" },
            { text: "不要变成发抖的小喵喵~", type: "嘲讽" },
            { text: "提伯斯！", type: "技能" },
            { text: "火焰，是我最喜欢的玩具！", type: "移动" },
            { text: "你也要来玩吗？很好玩的哦~", type: "移动" },
            { text: "那个，你看见过我的小熊吗？", type: "移动" }
        ]
    },
    "崔丝塔娜": {
        voiceCount: 6,
        lines: [
            { text: "我好想射点什么！", type: "选择", audio: "voices/崔丝塔娜_choose.ogg" },
            { text: "麦林炮手，就位！", type: "行动", audio: "voices/崔丝塔娜_ban.ogg" },
            { text: "蹦蹦跳跳！", type: "移动" },
            { text: "小小火炮，大大威力！", type: "嘲讽" },
            { text: "瞄准，射击，装弹，搞定！", type: "移动" },
            { text: "爆炸第一，疑问第二！", type: "行动" }
        ]
    },
    "赵信": {
        voiceCount: 6,
        lines: [
            { text: "一点寒芒先到，随后枪出如龙！", type: "选择", audio: "voices/赵信_choose.ogg" },
            { text: "长枪依在！", type: "行动", audio: "voices/赵信_ban.ogg" },
            { text: "命运已做出了它的选择。", type: "移动" },
            { text: "德玛西亚人从不退缩！", type: "嘲讽" },
            { text: "即使敌众我寡，末将亦能万军丛中取敌将首级！", type: "行动" },
            { text: "勇往直前！", type: "移动" }
        ]
    }
};

// 获取英雄语音
function getHeroVoices(championName) {
    if (window.HERO_VOICES && window.HERO_VOICES[championName]) {
        return window.HERO_VOICES[championName];
    }
    return null;
}
