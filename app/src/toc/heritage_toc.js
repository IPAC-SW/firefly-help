
// build up your table of contents here...

const toc_quickGuide = {
    id: 'quickGuide',
    title: 'Quick Start Guide',
    href: 'heritage/quickguide.html',
};

const toc_about = {
    id: 'about',
    title: 'About Spitzer',
    href: 'heritage/aboutSpitzer.html',
};

const toc_overview = {
    id: 'overview',
    title: 'Overview',
    href: 'heritage/overview.html',
};

const toc_basics = {
    id: 'basics',
    title: 'Basic Features and Functions',
    href: 'heritage/basics.html',
    items: [
        {
            id: 'basics.loadcatalog',
            title: 'Upload your own catalogs',
            href: 'heritage/basics.html#owncatalogs',
            hidden: true,
        },
        {
            id: 'basics.catalog.columns',
            title: 'Catalog columns restriction',
            href: 'heritage/basics.html#catColumn',
            hidden: true,
        },
        {
            id: 'basics.searching',
            title: 'Searches -- The basics of searching',
            href: 'heritage/basics.html#searching',
        },
        {
            id: 'basics.history',
            title: 'History/Tags',
            href: 'heritage/basics.html#searchHistory',
        },
        {
            id: 'basics.readfitsfile',
            title: 'Read FITS File',
            href: 'heritage/basics.html#readfitsfile',
        },
        {
            id: 'basics.preference',
            title: 'Preferences',
            href: 'heritage/basics.html#preferences',
        },
        {
            id: 'basics.help',
            title: 'Help',
            href: 'heritage/basics.html#help',
        },
        {
            id: 'basics.catalog',
            title: 'Catalogs',
            href: 'heritage/basics.html#catalogs',
        },
        {
            id: 'basics.download',
            title: 'Download data',
            href: 'heritage/basics.html#downloads',
        },
    ]
};


const toc_searching = {
    id: 'searching',
    title: 'Searching by...',
    href: 'heritage/searching.html',
    items: [
        {
            id: 'prodtype.desc',
            title: 'Description of product type',
            href: 'heritage/searching.html#aordefn',
            hidden: true,
        },
        {
            id: 'searching.byPosition',
            title: 'Position',
            href: 'heritage/searching.html#byPosition',
        },
        {
            id: 'searching.byBatch',
            title: 'Position (Batch Mode)',
            href: 'heritage/searching.html#byBatch',
        },
        {
            id: 'searching.byAbstract',
            title: 'Abstract',
            href: 'heritage/searching.html#byAbstract',
        },
        {
            id: 'searching.byReqId',
            title: 'AORKEY',
            href: 'heritage/searching.html#byReqId',
        },
        {
            id: 'searching.byCampId',
            title: 'Campaign',
            href: 'heritage/searching.html#byCampId',
        },
        {
            id: 'searching.byIrsEnh',
            title: 'IRS Enhanced Products',
            href: 'heritage/searching.html#byIrsEnh',
        },
        {
            id: 'searching.byNaifId',
            title: 'Moving Object',
            href: 'heritage/searching.html#byNaifId',
        },
        {
            id: 'searching.precovery',
            title: 'Moving Object Precovery',
            href: 'heritage/searching.html#precovery',
        },
        {
            id: 'searching.byObsDate',
            title: 'Observation Date',
            href: 'heritage/searching.html#byObsDate',
        },
        {
            id: 'searching.byObsName',
            title: 'Observer Name',
            href: 'heritage/searching.html#byObsName',
        },
        {
            id: 'searching.byProgId',
            title: 'Program ID',
            href: 'heritage/searching.html#byProgId',
        },
        {
            id: 'searching.byInventory',
            title: 'More on Enhanced Products',
            href: 'heritage/searching.html#enhanced',
        },
        {
            id: 'searching.byapi',
            title: 'Program Interface',
            href: 'heritage/api.html',
        },
    ]
};

const toc_results = {
    id: 'results',
    title: 'Search Results',
    href: 'heritage/results.html',
    items: [
        {
            id: 'results.aor',
            title: 'Observation (AOR)',
            href: 'heritage/results.html#aor',
        },
        {
            id: 'results.bcd',
            title: 'Level 1 (BCD)',
            href: 'heritage/results.html#bcd',
        },
        {
            id: 'results.pbcd',
            title: 'Level 2 (PBCD)',
            href: 'heritage/results.html#pbcd',
        },
        {
            id: 'results.filter',
            title: 'Filtering',
            href: 'heritage/results.html#filter',
        },
        {
            id: 'results.restrictData',
            title: 'Restricting Data in Other Tabs',
            href: 'heritage/results.html#restrictingdata',
        },
        {
            id: 'results.tagging',
            title: 'Tagging a search',
            href: 'heritage/results.html#tagging',
        },
        {
            id: 'results.irsenhprod',
            title: 'IRS Enhanced Products',
            href: 'heritage/results.html#irsenh',
        },
        {
            id: 'results.sm',
            title: 'Super Mosaics',
            href: 'heritage/results.html#sm',
        },
        {
            id: 'results.sl',
            title: 'Source List',
            href: 'heritage/results.html#sl',
        },
        {
            id: 'results.contribenhprod',
            title: 'Contributed Enhanced Products',
            href: 'heritage/results.html#contribenh',
        },
        {
            id: 'results.precovery',
            title: 'Orbit Precovery',
            href: 'heritage/results.html#precovery',
        },
    ]
};

const toc_details = {
    id: 'details',
    title: 'Details Pane',
    href: 'heritage/details.html',
    items: [
        {
            id: 'details.detail',
            title: 'Details tab',
            href: 'heritage/details.html#details',
        },
        {
            id: 'details.data',
            title: 'Data tab',
            href: 'heritage/details.html#data',
        },
        {
            id: 'details.aorfootprint',
            title: 'AOR Footprint tab',
            href: 'heritage/details.html#aorfootprint',
        },
        {
            id: 'details.aorcoverage',
            title: 'AOR DoC tab',
            href: 'heritage/details.html#aorcoverage',
        },
        {
            id: 'details.datacvg',
            title: 'Data Coverage tab',
            href: 'heritage/details.html#datacvg',
        },
    ]
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization',
    href: 'heritage/visualization.html',
    items: [
        {
            id: 'visualization.chartoptions',
            title: 'Change what is being plotted and how',
            href: 'heritage/visualization.html#chartoptions',
            hidden: true,
        },
        {
            id: 'visualization.Rotate',
            title: 'Rotate image at a angle',
            href: 'heritage/visualization.html#rotateImage',
            hidden: true,
        },
        {
            id: 'visualization.fitsDownloadOptions',
            title: 'Save the FITS or PNG file',
            href: 'heritage/visualization.html#fitsDownloadOptions',
            hidden: true,
        },
        {
            id: 'visualization.toolbox',
            title: 'Image Manipulation Tools',
            href: 'heritage/visualization.html#imageoptions',
            hidden: true,
        },
        {
            id: 'visualization.overview',
            title: 'Visualization Overview',
            href: 'heritage/visualization.html#overview',
        },
        {
            id: 'visualization.fitsViewer',
            title: 'Basic FITS Viewer',
            href: 'heritage/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageoptions',
            title: 'Image Toolbox',
            href: 'heritage/visualization.html#imageoptions',
        },
        {
            id: 'visualization.footprints',
            title: 'Footprints',
            href: 'heritage/visualization.html#footprints',
        },
        {
            id: 'visualization.xyplotViewer',
            title: 'Spectrum Viewer',
            href: 'heritage/visualization.html#xyplotViewer',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking from Pane',
            href: 'heritage/visualization.html#breakingout',
        },
        {
            id: 'visualization.wcs',
            title: 'WCS Alignment',
            href: 'heritage/visualization.html#wcs',
        },
    ]
};

const toc_catalogs = {
    id: 'catalogs',
    title: 'Catalogs',
    href: 'heritage/catalogs.html',
    items: [
        {
            id: 'catalogs.overview',
            title: 'Catalogs Overview',
            href: 'heritage/catalogs.html#overview',
        },
        {
            id: 'catalogs.irsacatalogs',
            title: 'IRSA catalogs',
            href: 'heritage/catalogs.html#irsacatalogs',
        },
        {
            id: 'catalogs.owncatalogs',
            title: 'Your own catalogs',
            href: 'heritage/catalogs.html#owncatalogs',
        },
        {
            id: 'catalogs.filters',
            title: 'Catalog Filters',
            href: 'heritage/catalogs.html#filters',
        },
        {
            id: 'catalogs.xyplots',
            title: 'Plotting Catalogs',
            href: 'heritage/catalogs.html#xyplots',
        },
        {
            id: 'catalogs.examples',
            title: 'Examples',
            href: 'heritage/catalogs.html#examples',
        },
    ]
};

const toc_downloads = {
    id: 'downloads',
    title: 'Downloads',
    href: 'heritage/downloads.html',
    items: [
        {
            id: 'downloads.Overview',
            title: 'Overview',
            href: 'heritage/downloads.html#overview',
        },
        {
            id: 'downloads.Backgroundmonitor',
            title: 'Background Monitor',
            href: 'heritage/downloads.html#background',
        },
        {
            id: 'downloads.DownloadScript',
            title: 'Downloading Script',
            href: 'heritage/downloads.html#downloadScript',
        },
        {
            id: 'downloads.Ackn',
            title: 'Acknowledgements',
            href: 'heritage/downloads.html#ackn',
        },
    ]
};

const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'heritage/user.html',
    items: [
        {
            id: 'user.signin',
            title: 'Log In',
            href: 'heritage/user.html#signin',
        },
        {
            id: 'user.newacct',
            title: 'Create New Account',
            href: 'heritage/user.html#newacct',
        },
        {
            id: 'user.retrieveinfo',
            title: 'Forgot name or pw',
            href: 'heritage/user.html#retrieveinfo',
        },
        {
            id: 'user.manageacct',
            title: 'Edit Profile',
            href: 'heritage/user.html#manageacct',
        },
        {
            id: 'user.changepass',
            title: 'Change Password',
            href: 'heritage/user.html#changepass',
        },
        {
            id: 'user.updateemail',
            title: 'Update Email',
            href: 'heritage/user.html#updateemail',
        },
        {
            id: 'user.preferences',
            title: 'Change Preferences',
            href: 'heritage/user.html#preferences',
        },
    ]
};

const toc_examples = {
    id: 'examples',
    title: 'Examples',
    href: 'heritage/examples.html',
};

const toc_faq = {
    id: 'faq',
    title: 'FAQ',
    href: 'heritage/faq.html',
};

const toc_more = {
    id: 'more',
    title: 'More Help/Contact Us',
    href: 'heritage/more.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'Privacy',
    href: 'heritage/privacy.html',
};



let myToc = [
    //{href: 'heritage/overview.html', title: 'IRSA Viewer: Overview'},
    toc_quickGuide,
    toc_about,
    toc_overview,
    toc_basics,
    toc_searching,
    toc_results,
    toc_details,
    toc_visualization,
    toc_catalogs,
    toc_downloads,
    toc_user,
    toc_examples,
    toc_faq,
    toc_more,
    toc_privacy,
];


// export it as toc
//export const toc = [{title: 'placeholder', href: 'heritage/share/about.html'}];
export default myToc;
