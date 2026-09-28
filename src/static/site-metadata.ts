interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: '王磊的户外跑',
  siteUrl: 'https://wanglei2279.vercel.app/',
  logo: 'https://pica.zhimg.com/fab23f1bb7896e64aeb114a203b30996_l.jpg?source=32738c0c',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'R.I.P',
      url: 'https://mp.weixin.qq.com/s?__biz=MzkwODY5MDQ2Nw==&mid=2247519433&idx=1&sn=79dd2aff6f7325f601faba23cabec780&source=41&poc_token=HOWee2ijL8qqFWjE7A-P9nADgxkH03oKmYmx9Fpo',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
