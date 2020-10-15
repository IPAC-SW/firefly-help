

// build up your table of contents here...

const toc_overview = {
    id: 'overview',
    title: 'SOFIA: Overview',
    href: 'sofia/overview.html',
    items: [
        {
            id: 'overview.history',
            title: 'Background',
            href: 'sofia/overview.html#history',
        },
        {
            id: 'overview.terminology',
            title: 'Terminology',
            href: 'sofia/overview.html#terminology',
        },
        {
            id: 'overview.data',
            title: 'Data and Caveats',
            href: 'sofia/overview.html#data',
        },
        {
            id: 'overview.searching',
            title: 'Searching (Quick Start)',
            href: 'sofia/overview.html#searching',
        },
        {
            id: 'overview.results',
            title: 'Results Overview',
            href: 'sofia/overview.html#results',
        },
        {
            id: 'overview.visualization',
            title: 'Visualization Overview',
            href: 'sofia/overview.html#visualization',
        },
        {
            id: 'overview.download',
            title: 'Downloading Data',
            href: 'sofia/overview.html#download',
        },
        {
            id: 'overview.preferences',
            title: 'Logging In',
            href: 'sofia/overview.html#login',
        },
        {
            id: 'overview.help',
            title: 'Getting More Help',
            href: 'sofia/overview.html#help',
        },
    ]
};
const toc_basics = {
    id: 'basics',
    title: 'Basic Features and Functions',
    href: 'sofia/basics.html',
    items: [
        {
            id: 'basics.searching',
            title: 'Searching Overview',
            href: 'sofia/basics.html#searching',
        },
        {
            id: 'basics.catalogs',
            title: 'Retrieving and Using Catalogs',
            href: 'sofia/basics.html#catalogs',
        },
        {
            id: 'basics.help',
            title: 'Getting More Help',
            href: 'sofia/basics.html#help',
        },
        {
            id: 'basics.downloads',
            title: 'Downloading Data',
            href: 'sofia/basics.html#downloads',
        },
        {
            id: 'basics.bgmon',
            title: 'Background Monitor',
            href: 'sofia/basics.html#bgmon',
        },
    ]
};

const toc_searching = {
    id: 'searching',
    title: 'More About Searching',
    href: 'sofia/searching.html',
    items: [
        {
            id: 'prodtype.desc',
            title: 'Description of product type',
            href: 'sofia/searching.html#aordefn',
            hidden: true,
        },
        {
            id: 'searching.byPosition',
            title: 'Spatial Constraints Search',
            href: 'sofia/searching.html#byPosition',
        },
        {
            id: 'searching.byTable',
            title: 'Searching in Batch Mode',
            href: 'sofia/searching.html#byTable',
        },
        {
            id: 'searching.bySSO',
            title: 'Searching by Solar System Object',
            href: 'sofia/searching.html#bySSO',
        },
        {
            id: 'searching.precovery',
            title: 'Precovery',
            href: 'sofia/searching.html#precovery',
        },
        {
            id: 'searching.allsky',
            title: 'Searching the Whole Sky',
            href: 'sofia/searching.html#allsky',
        },
        {
            id: 'searching.byProposal',
            title: 'Proposal Constraints',
            href: 'sofia/searching.html#byProposal',
        },
        {
            id: 'searching.byObservation',
            title: 'Observation Constraints',
            href: 'sofia/searching.html#byObservation',
        },
        {
            id: 'searching.byInstrument',
            title: 'Instrument Constraints',
            href: 'sofia/searching.html#byInstrument',
        },
        {
            id: 'searching.byData',
            title: 'Data Product Constraints',
            href: 'sofia/searching.html#byData',
        },
    ]
};
const toc_results = {
    id: 'results',
    title: 'Results',
    href: 'sofia/results.html',
    items: [
        {
            id: 'results.terminology',
            title: 'Terminology',
            href: 'sofia/results.html#terminology',
        },
        {
            id: 'results.layout',
            title: 'Layout',
            href: 'sofia/results.html#layout',
        },
        {
            id: 'results.filtering',
            title: 'Filtering',
            href: 'sofia/results.html#filtering',
        },
        {
            id: 'results.visualization',
            title: 'Visualization',
            href: 'sofia/results.html#visualization',
        },
    ]
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization Tools',
    href: 'sofia/visualization.html',
    items: [
        {
            id: 'visualization.fitsDownloadOptions',
            title: 'Save the FITS or PNG file',
            href: 'sofia/visualization.html#fitsDownloadOptions',
            hidden: true,
        },
        {
            id: 'visualization.Rotate',
            title: 'Rotate Image',
            href: 'sofia/visualization.html#rotateImage',
            hidden: true,
        },
        {
            id: 'visualization.selectregion',
            title: 'Select Region',
            href: 'sofia/visualization.html#selectregion',
            hidden: true,
        },
        {
            id: 'visualization.layers',
            title: 'Layers',
            href: 'sofia/visualization.html#layers',
            hidden: true,
        },
        {
            id: 'visualization.ds9regions',
            title: 'ds9 Regions',
            href: 'sofia/visualization.html#ds9regions',
            hidden: true,
        },
         {
            id: 'visualization.imageoptions',
            title: 'Image Toolbar',
            href: 'sofia/visualization.html#toolbar',
            hidden: true,
        },
        {
            id: 'visualization.hipsViewer',
            title: 'HiPS Viewer',
            href: 'sofia/visualization.html#hipsViewer',
            hidden: true,
        },
        {
            id: 'visualization.zoomin',
            title: 'zoomin',
            href: 'sofia/visualization.html#zoomin',
            hidden: true,
        },
        {
            id: 'visualization.fitsViewer',
            title: 'The FITS/HiPS viewer',
            href: 'sofia/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageinfo',
            title: 'Image Information',
            href: 'sofia/visualization.html#imageinfo',
        },
        {
            id: 'visualization.toolbar',
            title: 'Image Toolbar',
            href: 'sofia/visualization.html#toolbar',
        },
        {
            id: 'visualization.hipsViewer',
            title: 'Specific HiPS Features',
            href: 'sofia/visualization.html#hipsViewer',
        },
        {
            id: 'visualization.footprints',
            title: 'Footprints',
            href: 'sofia/visualization.html#footprints',
        },
        {
            id: 'visualization.catalogsandlayers',
            title: 'Catalogs and Layers',
            href: 'sofia/visualization.html#catalogsandlayers',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking out of the pane (and going back)',
            href: 'sofia/visualization.html#breakingout',
        },
        {
            id: 'visualization.coverage',
            title: 'Coverage Image',
            href: 'sofia/visualization.html#coverage',
        },
        {
            id: 'visualization.fitships',
            title: 'Automatic FITS-HiPS-Aitoff Transitions',
            href: 'sofia/visualization.html#autozoom',
        },
    ]
};

const toc_tables = {
    id: 'tables',
    title: 'Tables',
    href: 'sofia/tables.html',
    items: [
        {
            id: 'tables.tableoptions',
            title: 'Table Options',
            href: 'sofia/tables.html#tableoptions',
            hidden: true,
        },
        {
            id: 'tables.header',
            title: 'Table Header',
            href: 'sofia/tables.html#header',
        },
        {
            id: 'tables.columns',
            title: 'Table Columns',
            href: 'sofia/tables.html#columns',
        },
        {
            id: 'tables.filters',
            title: 'Table Filters',
            href: 'sofia/tables.html#filters',
        },
        {
            id: 'tables.cells',
            title: 'Table Cells',
            href: 'sofia/tables.html#cells',
        },
        {
            id: 'tables.save',
            title: 'Saving Tables',
            href: 'sofia/tables.html#save',
        },
    ]
};

export const toc_plots = {
    id: 'plots',
    title: 'Plots',
    href: 'sofia/plots.html',
    items: [
        {
            id: 'plots.default',
            title: 'Default Plot',
            href: 'sofia/plots.html#default'
        },
        {
            id: 'plots.firstlook',
            title: 'Plot Format: A First Look',
            href: 'sofia/plots.html#firstlook'
        },
        {
            id: 'plots.linking',
            title: 'Plot Linking',
            href: 'sofia/plots.html#linking'
        },
        {
            id: 'plots.changing',
            title: 'Changing What is Plotted',
            href: 'sofia/plots.html#changing'
        },
        {
            id: 'plots.manipulating',
            title: 'Plotting Manipulated Columns',
            href: 'sofia/plots.html#manipulating'
        },
        {
            id: 'plots.restricting',
            title: 'Restricting What is Plotted',
            href: 'sofia/plots.html#restricting'
        },
        {
            id: 'plots.saving',
            title: 'Saving Plots',
            href: 'sofia/plots.html#saving'
        },
        {
            id: 'plots.adding',
            title: 'Adding Plots',
            href: 'sofia/plots.html#adding'
        },
        {
            id: 'plots.example',
            title: 'Example Plots',
            href: 'sofia/plots.html#example'
        },
    ]
};


const toc_catalogs = {
    id: 'catalogs',
    title: 'Catalogs',
    href: 'sofia/catalogs.html',
    items: [
        {
            id: 'catalogs.catalogs',
            title: 'IRSA Catalogs',
            href: 'sofia/catalogs.html#catalogs',
             hidden: true,
        },
        {
            id: 'catalogs.irsacatalogs',
            title: 'IRSA Catalogs',
            href: 'sofia/catalogs.html#irsacatalogs',
        },
        {
            id: 'catalogs.owncatalogs',
            title: 'Your Own Catalogs',
            href: 'sofia/catalogs.html#owncatalogs',
        },
        {
            id: 'catalogs.vocatalogs',
            title: 'VO Catalogs',
            href: 'sofia/catalogs.html#vocatalogs',
        },
        {
            id: 'catalogs.nedcatalogs',
            title: 'NED Catalogs',
            href: 'sofia/catalogs.html#nedcatalogs',
        },
    ]
};


const toc_spectra = {
    id: 'spectra',
    title: 'Spectra',
    href: 'sofia/spectra.html',
    items: [
        {
            id: 'spectra.intro',
            title: 'Introduction',
            href: 'sofia/spectra.html#intro',
        },
        {
            id: 'spectra.imageplanes',
            title: 'Image Planes',
            href: 'sofia/spectra.html#imageplanes',
        },
        {
            id: 'spectra.tables',
            title: 'Tables',
            href: 'sofia/spectra.html#tables',
        },
        {
            id: 'spectra.plots',
            title: 'Plots (Charts)',
            href: 'sofia/spectra.html#plots',
        },
        {
            id: 'spectra.tablechartimage',
            title: 'Table, Chart, or Image',
            href: 'sofia/spectra.html#tablechartimage',
        },
    ]
};
const toc_downloads = {
    id: 'downloads',
    title: 'Downloading Data',
    href: 'sofia/downloads.html',
    items: [
        {
            id: 'downloads.Backgroundmonitor',
            title: 'Background Monitor',
            href: 'sofia/basics.html#background',
            hidden: true,
        },
        {
            id: 'downloads.overview',
            title: 'Overview',
            href: 'sofia/downloads.html#overview',
        },
        {
            id: 'downloads.downloadoptions',
            title: 'Download Options',
            href: 'sofia/downloads.html#downloadoptions',
        },
        {
            id: 'downloads.downloadScript',
            title: 'Download Script',
            href: 'sofia/downloads.html#downloadScript',
        },
    ]
};

const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'sofia/user.html',
};

const toc_faq = {
    id: 'faq',
    title: 'SOFIA FAQs',
    href: 'sofia/faq.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'IRSA Privacy Notice',
    href: 'sofia/privacy.html',
};



let myToc = [
    // {href: 'sofia/overview.html', title: 'SOFIA: Overview'},
    toc_overview,
    toc_basics,
    toc_searching,
    toc_results,
    toc_visualization,
    toc_tables,
    toc_catalogs,
    toc_plots,
    toc_spectra,
    toc_downloads,
    toc_user,
    toc_faq,
    toc_privacy,
];

// export it as toc
export default myToc;
