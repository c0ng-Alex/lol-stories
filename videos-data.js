/**
 * 英雄视频故事数据
 * 每个英雄可以有多个视频，支持B站、YouTube等平台
 * 格式说明：
 *   name: 英雄名称
 *   videos: [
 *     {
 *       title: 视频标题,
 *       author: UP主/作者,
 *       platform: 平台名称（如 B站 / YouTube）,
 *       url: 视频链接,
 *       cover: 封面图（可选）,
 *       duration: 时长（可选，如 '12:34'）,
 *       desc: 简介（可选）
 *     }
 *   ]
 */
const CHAMPION_VIDEOS = {
    '亚索': {
        name: '亚索',
        videos: [
            {
                title: '【英雄联盟】亚索 背景故事',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Us411o7mF/',
                duration: '05:20',
                desc: '官方英雄传记动画'
            },
            {
                title: '亚索全语音与背景深度解读',
                author: 'LOL英雄故事',
                platform: 'B站',
                url: 'https://search.bilibili.com/all?keyword=亚索背景故事',
                duration: '15:30',
                desc: '深度解析亚索的人生悲剧与赎罪之路'
            }
        ]
    },
    '金克丝': {
        name: '金克丝',
        videos: [
            {
                title: '【英雄联盟：双城之战】金克丝/爆爆人物志',
                author: '英雄联盟官方',
                platform: 'B站',
                url: 'https://www.bilibili.com/bangumi/play/ss39431/',
                duration: '全9集',
                desc: '《双城之战》动画完整讲述金克丝的故事'
            },
            {
                title: '金克丝 Get Jinxed 官方MV',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1xx411Z7Hd/',
                duration: '02:45',
                desc: '金克丝出道主题曲MV'
            }
        ]
    },
    '蔚': {
        name: '蔚',
        videos: [
            {
                title: '【英雄联盟：双城之战】蔚人物志',
                author: '英雄联盟官方',
                platform: 'B站',
                url: 'https://www.bilibili.com/bangumi/play/ss39431/',
                duration: '全9集',
                desc: '《双城之战》中蔚的成长与蜕变'
            }
        ]
    },
    '凯特琳': {
        name: '凯特琳',
        videos: [
            {
                title: '【英雄联盟：双城之战】凯特琳人物解读',
                author: '英雄联盟官方',
                platform: 'B站',
                url: 'https://www.bilibili.com/bangumi/play/ss39431/',
                duration: '全9集',
                desc: '皮城女警的正义之路'
            }
        ]
    },
    '杰斯': {
        name: '杰斯',
        videos: [
            {
                title: '【英雄联盟：双城之战】杰斯人物志',
                author: '英雄联盟官方',
                platform: 'B站',
                url: 'https://www.bilibili.com/bangumi/play/ss39431/',
                duration: '全9集',
                desc: '从发明家到议员，杰斯的抉择与挣扎'
            }
        ]
    },
    '维克托': {
        name: '维克托',
        videos: [
            {
                title: '【英雄联盟：双城之战】维克托人物解读',
                author: '英雄联盟官方',
                platform: 'B站',
                url: 'https://www.bilibili.com/bangumi/play/ss39431/',
                duration: '全9集',
                desc: '光荣进化的理想与现实'
            }
        ]
    },
    '艾克': {
        name: '艾克',
        videos: [
            {
                title: '艾克 秒 官方CG动画',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Gx411k7QH/',
                duration: '03:30',
                desc: '艾克大招穿越时间的震撼动画'
            },
            {
                title: '【英雄联盟：双城之战】艾克登场',
                author: '英雄联盟官方',
                platform: 'B站',
                url: 'https://www.bilibili.com/bangumi/play/ss39431/',
                duration: '全9集',
                desc: '野火帮首领的成长故事'
            }
        ]
    },
    '阿狸': {
        name: '阿狸',
        videos: [
            {
                title: '阿狸 别离开我 官方CG',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Ds411o7mF/',
                duration: '04:00',
                desc: '阿狸追寻自我记忆的旅程'
            }
        ]
    },
    '瑞兹': {
        name: '瑞兹',
        videos: [
            {
                title: '瑞兹 力量的召唤 官方CG',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1cx411Z7qR/',
                duration: '06:30',
                desc: '符文法师守护世界的千年旅程'
            }
        ]
    },
    '盖伦': {
        name: '盖伦',
        videos: [
            {
                title: '德玛西亚 光明不能照亮一切',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Kt411Y7qZ/',
                duration: '04:30',
                desc: '德玛西亚王国的真相与盖伦的信仰'
            }
        ]
    },
    '拉克丝': {
        name: '拉克丝',
        videos: [
            {
                title: '拉克丝 光明不能照亮一切',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Kt411Y7qZ/',
                duration: '04:30',
                desc: '生在禁魔国度的魔法师，她的秘密与挣扎'
            }
        ]
    },
    '塞拉斯': {
        name: '塞拉斯',
        videos: [
            {
                title: '塞拉斯 解脱者 官方故事动画',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1mJ411x7yG/',
                duration: '05:00',
                desc: '从阶下囚到革命者，塞拉斯的复仇之路'
            }
        ]
    },
    '赵信': {
        name: '赵信',
        videos: [
            {
                title: '赵信 德玛西亚的守护',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://search.bilibili.com/all?keyword=赵信背景故事',
                duration: '08:20',
                desc: '从角斗士到皇家护卫的传奇人生'
            }
        ]
    },
    '德莱厄斯': {
        name: '德莱厄斯',
        videos: [
            {
                title: '德莱厄斯 诺克萨斯之手 官方CG',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Wx411Z7nL/',
                duration: '04:00',
                desc: '从孤儿到诺克萨斯大将军的铁血之路'
            }
        ]
    },
    '锐雯': {
        name: '锐雯',
        videos: [
            {
                title: '锐雯 断剑重铸 背景故事',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://search.bilibili.com/all?keyword=锐雯背景故事',
                duration: '10:15',
                desc: '诺克萨斯战争英雄的觉醒与自我救赎'
            }
        ]
    },
    '卡特琳娜': {
        name: '卡特琳娜',
        videos: [
            {
                title: '卡特琳娜 刀锋之舞',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://search.bilibili.com/all?keyword=卡特琳娜背景故事',
                duration: '07:30',
                desc: '诺克萨斯名门之女，致命的刺客'
            }
        ]
    },
    '锤石': {
        name: '锤石',
        videos: [
            {
                title: '锤石 暗影岛的折磨者',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://search.bilibili.com/all?keyword=锤石背景故事',
                duration: '09:00',
                desc: '从看守者到怨灵，锤石的堕落之路'
            }
        ]
    },
    '卢锡安': {
        name: '卢锡安',
        videos: [
            {
                title: '卢锡安与塞纳 光明与暗影',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://search.bilibili.com/all?keyword=卢锡安背景故事',
                duration: '12:00',
                desc: '失去爱人后的复仇与重逢'
            }
        ]
    },
    '佛耶戈': {
        name: '佛耶戈',
        videos: [
            {
                title: '佛耶戈 破败之王 官方CG动画',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1v54y1s7tP/',
                duration: '04:30',
                desc: '一个国王的疯狂爱情，导致了整个世界的灾难'
            }
        ]
    },
    '佐伊': {
        name: '佐伊',
        videos: [
            {
                title: '佐伊 暮光星灵 背景故事',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://search.bilibili.com/all?keyword=佐伊背景故事',
                duration: '06:45',
                desc: '被星灵选中的顽童，穿梭于维度之间'
            }
        ]
    }
};

// 获取英雄的视频列表
function getChampionVideos(championName) {
    const data = CHAMPION_VIDEOS[championName];
    if (data && data.videos && data.videos.length > 0) {
        return data.videos;
    }
    return [];
}

// 判断英雄是否有视频
function hasVideos(championName) {
    return getChampionVideos(championName).length > 0;
}
