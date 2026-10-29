/**
 * 英雄视频故事数据
 * 每个英雄可以有多个视频，支持B站、微信视频号等平台
 *
 * 平台支持说明：
 *   - B站：直接跳转bilibili.com视频页面
 *   - 微信视频号：需要先获取视频的分享链接（在视频号内点分享→复制链接）
 *
 * 格式说明：
 *   name: 英雄名称
 *   videos: [
 *     {
 *       title: 视频标题,
 *       author: UP主/作者,
 *       platform: 平台名称（如 B站 / 微信视频号）,
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
                title: '【英雄联盟】乘风归 官方动画短片',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1p5411e7F6/',
                duration: '09:30',
                desc: '亚索与永恩的宿命对决，灵魂莲华官方CG动画'
            },
            {
                title: '英雄联盟宇宙：城邦传说 - 艾欧尼亚',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1k64y1T7ff/',
                duration: '06:45',
                desc: '艾欧尼亚地区故事，含亚索、阿卡丽等英雄'
            }
        ]
    },
    '永恩': {
        name: '永恩',
        videos: [
            {
                title: '【英雄联盟】乘风归 官方动画短片',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1p5411e7F6/',
                duration: '09:30',
                desc: '封魔剑魂永恩的诞生，与弟弟亚索的重逢'
            }
        ]
    },
    '金克丝': {
        name: '金克丝',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 皮尔特沃夫与祖安',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Cf4y1U7WJ/',
                duration: '05:30',
                desc: '皮城与祖安的双城故事，金克丝、蔚登场'
            }
        ]
    },
    '蔚': {
        name: '蔚',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 皮尔特沃夫与祖安',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Cf4y1U7WJ/',
                duration: '05:30',
                desc: '皮城执法官蔚的故事，双城冲突的开端'
            }
        ]
    },
    '凯特琳': {
        name: '凯特琳',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 皮尔特沃夫与祖安',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Cf4y1U7WJ/',
                duration: '05:30',
                desc: '皮城女警凯特琳登场，追查祖安迷案'
            }
        ]
    },
    '杰斯': {
        name: '杰斯',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 皮尔特沃夫与祖安',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Cf4y1U7WJ/',
                duration: '05:30',
                desc: '未来守护者杰斯，海克斯科技的诞生'
            }
        ]
    },
    '维克托': {
        name: '维克托',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 皮尔特沃夫与祖安',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Cf4y1U7WJ/',
                duration: '05:30',
                desc: '机械先驱维克托，光荣进化的理想'
            }
        ]
    },
    '艾克': {
        name: '艾克',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 皮尔特沃夫与祖安',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Cf4y1U7WJ/',
                duration: '05:30',
                desc: '时间刺客艾克，祖安的天才少年'
            }
        ]
    },
    '阿狸': {
        name: '阿狸',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 艾欧尼亚',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1k64y1T7ff/',
                duration: '06:45',
                desc: '艾欧尼亚地区故事，九尾妖狐阿狸的故乡'
            }
        ]
    },
    '阿卡丽': {
        name: '阿卡丽',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 艾欧尼亚',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1k64y1T7ff/',
                duration: '06:45',
                desc: '离群之刺阿卡丽登场，艾欧尼亚的暗影'
            }
        ]
    },
    '瑞兹': {
        name: '瑞兹',
        videos: [
            {
                title: '瑞兹：力量的召唤 官方CG',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV17s411A7dp/',
                duration: '06:30',
                desc: '符文法师守护世界的千年旅程'
            }
        ]
    },
    '盖伦': {
        name: '盖伦',
        videos: [
            {
                title: '德玛西亚 荣耀之前 官方故事短片',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Ee41147nj/',
                duration: '04:30',
                desc: '德玛西亚王国的诞生与真相，盖伦的信仰'
            },
            {
                title: '【英雄联盟】战士 2020赛季官方CG',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1mJ411G7ue/',
                duration: '05:30',
                desc: '盖伦、卡莎、厄加特等英雄登场的史诗CG'
            }
        ]
    },
    '拉克丝': {
        name: '拉克丝',
        videos: [
            {
                title: '德玛西亚 荣耀之前 官方故事短片',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Ee41147nj/',
                duration: '04:30',
                desc: '生在禁魔国度的魔法师，拉克丝的秘密'
            }
        ]
    },
    '塞拉斯': {
        name: '塞拉斯',
        videos: [
            {
                title: '德玛西亚 荣耀之前 官方故事短片',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Ee41147nj/',
                duration: '04:30',
                desc: '解脱者塞拉斯，德玛西亚禁魔制度的受害者'
            }
        ]
    },
    '赵信': {
        name: '赵信',
        videos: [
            {
                title: '【英雄联盟】战士 2020赛季官方CG',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1mJ411G7ue/',
                duration: '05:30',
                desc: '德邦总管赵信登场，守护德玛西亚的荣耀'
            }
        ]
    },
    '德莱厄斯': {
        name: '德莱厄斯',
        videos: [
            {
                title: '2025赛季诺克萨斯CG动画「齿痕」',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1mHroYJEM8/',
                duration: '10:21',
                desc: '诺克萨斯之手德莱厄斯，帝国的铁血意志'
            },
            {
                title: '德莱厄斯在战场上竟然因为一个新兵变成了战俘！！',
                author: '英雄联盟JOJO',
                platform: '微信视频号',
                url: 'https://weixin.qq.com/sph/A6Um3w81AN',
                desc: '诺克萨斯之手德莱厄斯的战场故事'
            }
        ]
    },
    '内瑟斯': {
        name: '内瑟斯',
        videos: [
            {
                title: '你只是怕了，内瑟斯！',
                author: '英雄联盟JOJO',
                platform: '微信视频号',
                url: 'https://weixin.qq.com/sph/AtWzHsxRQ2',
                desc: '沙漠死神内瑟斯的故事'
            }
        ]
    },
    '亚托克斯': {
        name: '亚托克斯',
        videos: [
            {
                title: '暗裔？',
                author: '英雄联盟JOJO',
                platform: '微信视频号',
                url: 'https://weixin.qq.com/sph/AF2PzaS6cN',
                desc: '暗裔剑魔亚托克斯的起源与传说'
            }
        ]
    },
    '安妮': {
        name: '安妮',
        videos: [
            {
                title: '第2集：提伯斯觉醒：失去一切的少女与熊熊怒火',
                author: '英雄联盟JOJO',
                platform: '微信视频号',
                url: 'https://weixin.qq.com/sph/AlUl9jDzVC',
                desc: '黑暗之女安妮与提伯斯的起源故事'
            }
        ]
    },
    '阿兹尔': {
        name: '阿兹尔',
        videos: [
            {
                title: '阿兹尔的无力，岩雀以万千岩刺破局',
                author: '英雄联盟JOJO',
                platform: '微信视频号',
                url: 'https://weixin.qq.com/sph/A9c6LSYfor',
                desc: '沙漠皇帝阿兹尔与岩雀的恕瑞玛故事'
            }
        ]
    },
    '塔莉垭': {
        name: '塔莉垭',
        videos: [
            {
                title: '阿兹尔的无力，岩雀以万千岩刺破局',
                author: '英雄联盟JOJO',
                platform: '微信视频号',
                url: 'https://weixin.qq.com/sph/A9c6LSYfor',
                desc: '岩雀塔莉垭以岩脉之力破局的故事'
            }
        ]
    },
    '卡特琳娜': {
        name: '卡特琳娜',
        videos: [
            {
                title: '2025赛季诺克萨斯CG动画「齿痕」',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1mHroYJEM8/',
                duration: '10:21',
                desc: '诺克萨斯帝国故事，不祥之刃卡特琳娜'
            }
        ]
    },
    '锐雯': {
        name: '锐雯',
        videos: [
            {
                title: '德玛西亚 荣耀之前 官方故事短片',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1Ee41147nj/',
                duration: '04:30',
                desc: '放逐之刃锐雯，诺克萨斯逃兵在德玛西亚'
            }
        ]
    },
    '锤石': {
        name: '锤石',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 暗影岛',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1fz411b76p/',
                duration: '05:00',
                desc: '暗影岛的恐怖，魂锁典狱长锤石的故事'
            }
        ]
    },
    '卢锡安': {
        name: '卢锡安',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 暗影岛',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1fz411b76p/',
                duration: '05:00',
                desc: '圣枪游侠卢锡安与塞纳的爱情故事'
            }
        ]
    },
    '佛耶戈': {
        name: '佛耶戈',
        videos: [
            {
                title: '【英雄联盟】新赛季宣传片：破败之咒',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1xX4y1M7eQ/',
                duration: '04:30',
                desc: '破败之王佛耶戈登场，2021赛季官方CG'
            },
            {
                title: '卡玛维亚宿命：少年佛耶戈被迫加冕，王座试炼揭开悲剧序章',
                author: '英雄联盟JOJO',
                platform: '微信视频号',
                url: 'https://weixin.qq.com/sph/A8gA52OBF1',
                desc: '讲述佛耶戈从少年国王到破败之王的悲剧起源'
            }
        ]
    },
    '佐伊': {
        name: '佐伊',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 巨神峰',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV13h411d7dz/',
                duration: '06:00',
                desc: '巨神峰的星灵故事，暮光星灵佐伊'
            }
        ]
    },
    '潘森': {
        name: '潘森',
        videos: [
            {
                title: '英雄联盟宇宙：城邦传说 - 巨神峰',
                author: '英雄联盟宇宙',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV13h411d7dz/',
                duration: '06:00',
                desc: '不屈之枪潘森，凡人对抗星灵的传奇'
            }
        ]
    },
    '卡莎': {
        name: '卡莎',
        videos: [
            {
                title: '【英雄联盟】战士 2020赛季官方CG',
                author: '英雄联盟',
                platform: 'B站',
                url: 'https://www.bilibili.com/video/BV1mJ411G7ue/',
                duration: '05:30',
                desc: '虚空之女卡莎，在虚空中幸存的猎人'
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
