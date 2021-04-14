

// build up your table of contents here...

const toc_overview = {
    id: 'overview',
    title: 'Finder Chart: Overview',
    href: 'finderchart/overview.html',
    items: [
        {
            id: 'overview.surveys',
            title: 'Surveys/Wavelengths/Sky Coverage',
            href: 'finderchart/overview.html#surveys',
        },
        {
            id: 'overview.terminology',
            title: 'Terminology',
            href: 'finderchart/overview.html#terminology',
        },
        {
            id: 'overview.tools',
            title: 'Tools Overview',
            href: 'finderchart/overview.html#tools',
        },
        {
            id: 'overview.download',
            title: 'Downloading Data',
            href: 'finderchart/overview.html#download',
        },
        {
            id: 'overview.login',
            title: 'User Login',
            href: 'finderchart/overview.html#login',
        },
        {
            id: 'overview.help',
            title: 'Getting More Help',
            href: 'finderchart/overview.html#help',
        },
   ]
};

const toc_basics = {
    id: 'basics',
    title: 'Basic Features and Functions',
    href: 'finderchart/basics.html',
    items: [
        {
            id: 'basics.loadcatalog',
            title: 'Upload your own catalogs',
            href: 'finderchart/catalogs.html#owncatalogs',
            hidden: true,
        },
        {
            id: 'basics.searching',
            title: 'How to Search',
            href: 'finderchart/basics.html#searching',
        },
        {
            id: 'basics.byTable',
            title: 'Searching on Multiple Targets',
            href: 'finderchart/basics.html#byTable',
        },
        {
            id: 'basics.catalogs',
            title: 'Retrieving and Using Catalogs',
            href: 'finderchart/basics.html#catalogs',
        },
        {
            id: 'basics.help',
            title: 'Getting Help',
            href: 'finderchart/basics.html#help',
        },
        {
            id: 'basics.downloads',
            title: 'Downloading Data',
            href: 'finderchart/basics.html#downloads',
        },
        {
            id: 'basics.background',
            title: 'Background Monitor',
            href: 'finderchart/basics.html#background',
        },
        {
            id: 'basics.bgmon',
            title: 'Background Monitor',
            href: 'finderchart/basics.html#background',
            hidden: true,
        },
    ]
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization Tools',
    href: 'finderchart/visualization.html',
    items: [
        {
            id: 'visualization.fitsDownloadOptions',
            title: 'Save the FITS or PNG file',
            href: 'finderchart/visualization.html#fitsDownloadOptions',
            hidden: true,
        },
        {
            id: 'visualization.Rotate',
            title: 'Rotate Image',
            href: 'finderchart/visualization.html#rotateImage',
            hidden: true,
        },
        {
            id: 'visualization.imageoptions',
            title: 'Image Toolbar',
            href: 'finderchart/visualization.html#toolbar',
            hidden: true,
        },
        {
            id: 'visualization.selectregion',
            title: 'Select Region',
            href: 'finderchart/visualization.html#selectregion',
            hidden: true,
        },
        {
            id: 'visualization.layers',
            title: 'Layers',
            href: 'finderchart/visualization.html#layers',
            hidden: true,
        },
        {
            id: 'visualization.ds9regions',
            title: 'ds9 Regions',
            href: 'finderchart/visualization.html#ds9regions',
            hidden: true,
        },
        {
            id: 'visualization.fitsViewer',
            title: 'FITS viewer',
            href: 'finderchart/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageinfo',
            title: 'Image Information',
            href: 'finderchart/visualization.html#imageinfo',
        },
        {
            id: 'visualization.toolbar',
            title: 'Image Toolbar',
            href: 'finderchart/visualization.html#toolbar',
        },
        {
            id: 'visualization.stretches',
            title: 'Color Stretches',
            href: 'finderchart/visualization.html#stretches',
        },
        {
            id: 'visualization.footprints',
            title: 'Footprints',
            href: 'finderchart/visualization.html#footprints',
        },
        {
            id: 'visualization.3color',
            title: '3-Color Images',
            href: 'finderchart/visualization.html#3color',
        },
        {
            id: 'visualization.catalogsandlayers',
            title: 'Catalogs and Layers',
            href: 'finderchart/visualization.html#catalogsandlayers',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking out of the pane',
            href: 'finderchart/visualization.html#breakingout',
        },
        {
            id: 'visualization.wcs',
            title: 'WCS Alignment',
            href: 'finderchart/visualization.html#wcs',
        },
    ]
};

const toc_tables = {
    id: 'tables',
    title: 'Tables',
    href: 'finderchart/tables.html',
    items: [
        {
            id: 'tables.tableoptions',
            title: 'Table Options',
            href: 'finderchart/tables.html#tableoptions',
            hidden: true,
        },
        {
            id: 'tables.header',
            title: 'Table Header',
            href: 'finderchart/tables.html#header',
        },
        {
            id: 'tables.columns',
            title: 'Table Columns',
            href: 'finderchart/tables.html#columns',
        },
        {
            id: 'tables.filters',
            title: 'Table Filters',
            href: 'finderchart/tables.html#filters',
        },
         {
            id: 'tables.cells',
            title: 'Table Cells',
            href: 'finderchart/tables.html#cells',
        },
       {
            id: 'tables.save',
            title: 'Saving Tables',
            href: 'finderchart/tables.html#save',
        },
    ]
};

const toc_catalogs = {
    id: 'catalogs',
    title: 'Catalogs',
    href: 'finderchart/catalogs.html',
    items: [
        {
            id: 'visualization.xyplotViewer',
            title: 'Making Plots',
            href: 'finderchart/catalogs.html#xyplots',
            hidden: true,
        },
        {
            id: 'catalogs.vo',
            title: 'VO Catalogs',
            href: 'finderchart/catalogs.html#vocatalogs',
            hidden: true,
        },
        {
            id: 'catalogs.ned',
            title: 'NED Catalogs',
            href: 'finderchart/catalogs.html#nedcatalogs',
            hidden: true,
        },
        {
            id: 'visualization.chartoptions',
            title: 'Making Plots',
            href: 'finderchart/catalogs.html#xyplots',
            hidden: true,
        },
        {
            id: 'tables',
            title: 'Tables',
            href: 'finderchart/catalogs.html#tables',
            hidden: true,
        },
        {
            id: 'catalogs.columnsfilters',
            title: 'Columns and Filters',
            href: 'finderchart/catalogs.html#columns',
            hidden: true,
        },
        {
            id: 'catalogs.fromfrontpage',
            title: 'Initially Searching on Catalogs',
            href: 'finderchart/catalogs.html#fromfrontpage',
        },
        {
            id: 'catalogs.irsacatalogs',
            title: 'IRSA catalogs',
            href: 'finderchart/catalogs.html#irsacatalogs',
        },
        {
            id: 'catalogs.owncatalogs',
            title: 'Your Own Catalogs',
            href: 'finderchart/catalogs.html#owncatalogs',
        },
        {
            id: 'catalogs.vocatalogs',
            title: 'VO Catalogs',
            href: 'finderchart/catalogs.html#vocatalogs',
        },
        {
            id: 'catalogs.nedcatalogs',
            title: 'NED Catalogs',
            href: 'finderchart/catalogs.html#nedcatalogs',
        },
    ]
};

export const toc_plots = {
    id: 'plots',
    title: 'Plots',
    href: 'finderchart/plots.html',
    items: [
        {
            id: 'plots.default',
            title: 'Default Plot',
            href: 'finderchart/plots.html#default'
        },
        {
            id: 'plots.firstlook',
            title: 'Plot Format: A First Look',
            href: 'finderchart/plots.html#firstlook'
        },
        {
            id: 'plots.linking',
            title: 'Plot Linking',
            href: 'finderchart/plots.html#linking'
        },
        {
            id: 'plots.changing',
            title: 'Changing What is Plotted',
            href: 'finderchart/plots.html#changing'
        },
        {
            id: 'plots.manipulating',
            title: 'Plotting Manipulated Columns',
            href: 'finderchart/plots.html#manipulating'
        },
        {
            id: 'plots.restricting',
            title: 'Restricting What is Plotted',
            href: 'finderchart/plots.html#restricting'
        },
        {
            id: 'plots.saving',
            title: 'Saving Plots',
            href: 'finderchart/plots.html#saving'
        },
        {
            id: 'plots.example1',
            title: 'Example Plot 1',
            href: 'finderchart/plots.html#example1'
        },
        {
            id: 'plots.example2',
            title: 'Example Plot 2',
            href: 'finderchart/plots.html#example2'
        },
    ]
};


const toc_downloads = {
    id: 'downloads',
    title: 'Downloading Data',
    href: 'finderchart/downloads.html',
    items: [
        {
            id: 'downloads.Backgroundmonitor',
            title: 'Background Monitor',
            href: 'finderchart/basics.html#background',
            hidden: true,
        },
        {
            id: 'downloads.overview',
            title: 'Overview',
            href: 'finderchart/downloads.html#overview',
        },
        {
            id: 'downloads.downloadoptions',
            title: 'Download Options',
            href: 'finderchart/downloads.html#downloadoptions',
        },
        {
            id: 'downloads.downloadScript',
            title: 'Download Script',
            href: 'finderchart/downloads.html#downloadScript',
        },
        {
            id: 'downloads.ackn',
            title: 'Acknowledgments',
            href: 'finderchart/downloads.html#ackn',
        },
    ]
};

const toc_api = {
    id: 'api',
    title: 'Program Interface',
    href: 'finderchart/api.html',
    items: [
        {
            id: 'api.intro',
            title: 'Introduction ',
            href: 'finderchart/api.html#intro',
        },
        {
            id: 'api.introapi',
            title: 'Introduction to API',
            href: 'finderchart/api.html#introapi',
        },
        {
            id: 'api.inputparameters',
            title: 'Input Parameters',
            href: 'finderchart/api.html#inputparameters',
        },
        {
            id: 'api.inputexamples',
            title: 'Input Examples',
            href: 'finderchart/api.html#inputexamples',
        },
        {
            id: 'api.outputparameters',
            title: 'Output Parameters',
            href: 'finderchart/api.html#outputparameters',
        },
        {
            id: 'api.outputexamples',
            title: 'Output Examples',
            href: 'finderchart/api.html#outputexamples',
        },
    ]
};


const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'finderchart/user.html',
};

const toc_faq = {
    id: 'faq',
    title: 'FAQs',
    href: 'finderchart/faq.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'IRSA Privacy Notice',
    href: 'finderchart/privacy.html',
};


let myToc = [
    //{href: 'finderchart/overview.html', title: 'Finder Chart: Overview'},
    toc_overview,
    toc_basics,
    toc_visualization,
    toc_tables,
    toc_catalogs,
    toc_plots,
    toc_downloads,
    toc_api,
    toc_user,
    toc_faq,
    toc_privacy,
];


// export it as toc
export default myToc;
