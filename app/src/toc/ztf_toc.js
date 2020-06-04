

// build up your table of contents here...



const toc_overview = {
    id: 'overview',
    title: 'Overview',
    href: 'ztf/overview.html',
    items: [
        {
            id: 'overview.history',
            title: 'History and Background',
            href: 'ztf/overview.html#history',
        },
        {
            id: 'overview.terminology',
            title: 'Terminology',
            href: 'ztf/overview.html#terminology',
        },
        {
            id: 'overview.searching',
            title: 'Searching Overview',
            href: 'ztf/overview.html#searching',
        },
        {
            id: 'overview.results',
            title: 'Results Overview',
            href: 'ztf/overview.html#results',
        },
        {
            id: 'overview.visualization',
            title: 'Visualization Overview',
            href: 'ztf/overview.html#visualization',
        },
        {
            id: 'overview.download',
            title: 'Downloading Data',
            href: 'ztf/overview.html#download',
        },
        {
            id: 'overview.preferences',
            title: 'User Login',
            href: 'ztf/overview.html#preferences',
        },
        {
            id: 'overview.help',
            title: 'Getting More Help',
            href: 'ztf/overview.html#help',
        },
   ]
};


const toc_basics = {
    id: 'basics',
    title: 'Basic Features and Functions',
    href: 'ztf/basics.html',
    items: [
        {
            id: 'basics.byTable',
            title: 'Searching in batch mode',
            href: 'ztf/basics.html#byTable',
            hidden: true,
        },
        {
            id: 'basics.catalog',
            title: 'Retrieving and using catalogs',
            href: 'ztf/basics.html#catalog',
            hidden: true,
        },
        {
            id: 'basics.loadcatalog',
            title: 'Own Catalogs',
            href: 'ztf/basics.html#owncatalogs',
            hidden: true,
        },
        {
            id: 'basics.searching',
            title: 'Searches -- The basics of searching',
            href: 'ztf/basics.html#searching',
        },
        {
            id: 'basics.byZTFField',
            title: 'Searching by ZTF Field ID',
            href: 'ztf/basics.html#byZTFField',
        },
        {
            id: 'basics.bySSO',
            title: 'Searching by Solar System Object/Orbit',
            href: 'ztf/basics.html#bySSO',
        },
        {
            id: 'basics.history',
            title: 'Your Search History',
            href: 'ztf/basics.html#searchHistory',
        },
        {
            id: 'basics.help',
            title: 'Help',
            href: 'ztf/basics.html#help',
        },
        {
            id: 'basics.catalog',
            title: 'Catalogs',
            href: 'ztf/basics.html#catalogs',
        },
        {
            id: 'basics.download',
            title: 'Download data',
            href: 'ztf/basics.html#downloads',
        },
        {
            id: 'downloads.background',
            title: 'Background Monitor',
            href: 'ztf/basics.html#background',
        },
    ]
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization',
    href: 'ztf/visualization.html',
    items: [
        {
            id: 'visualization.overview',
            title: 'Visualization Overview',
            href: 'ztf/visualization.html#overview',
        },
        {
            id: 'visualization.fitsViewer',
            title: 'Basic FITS Viewer',
            href: 'ztf/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageoptions',
            title: 'Visualization Tools',
            href: 'ztf/visualization.html#imageoptions',
        },
        {
            id: 'visualization.footprints',
            title: 'Footprints',
            href: 'ztf/visualization.html#footprints',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking from Pane',
            href: 'ztf/visualization.html#breakingout',
        },
    ]
};

const toc_catalogs = {
    id: 'catalogs',
    title: 'Catalogs',
    href: 'ztf/catalogs.html',
    items: [
        {
            id: 'catalogs.irsacatalogs',
            title: 'IRSA catalogs',
            href: 'ztf/catalogs.html#irsacatalogs',
        },
        {
            id: 'catalogs.owncatalogs',
            title: 'Your own catalogs',
            href: 'ztf/catalogs.html#owncatalogs',
        },
        {
            id: 'catalogs.vocatalogs',
            title: 'VO catalogs',
            href: 'ztf/catalogs.html#vocatalogs',
        },
        {
            id: 'catalogs.columnsfilters',
            title: 'Columns and Filters',
            href: 'ztf/catalogs.html#columnsfilters',
        },
        {
            id: 'catalogs.xyplots',
            title: 'Making plots',
            href: 'ztf/catalogs.html#xyplots',
        },
        {
            id: 'catalogs.examples',
            title: 'Examples',
            href: 'ztf/catalogs.html#examples',
        },
    ]
};

const toc_downloads = {
    id: 'downloads',
    title: 'Downloads',
    href: 'ztf/downloads.html',
    items: [
        {
            id: 'downloads.overview',
            title: 'Overview',
            href: 'ztf/downloads.html#overview',
        },
        {
            id: 'downloads.downloadoptions',
            title: 'Download Options',
            href: 'ztf/downloads.html#downloadoptions',
        },
        {
            id: 'downloads.downloadScript',
            title: 'Download Script',
            href: 'ztf/downloads.html#downloadScript',
        },
    ]
};

const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'ztf/user.html',
};

const toc_faq = {
    id: 'faq',
    title: 'FAQ',
    href: 'ztf/faq.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'Privacy',
    href: 'ztf/privacy.html',
};



let myToc = [
    //{href: 'ztf/overview.html', title: 'IRSA Viewer: Overview'},
    toc_overview,
    toc_basics,
    toc_visualization,
    toc_catalogs,
    toc_downloads,
    toc_user,
    toc_faq,
    toc_privacy,
];


// export it as toc
//export const toc = [{title: 'placeholder', href: 'ztf/share/about.html'}];
export default myToc;

