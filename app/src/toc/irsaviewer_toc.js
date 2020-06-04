

// build up your table of contents here...


//     const toc_gator = {
//         id: 'gator.table',
//         title: 'Gator help',
//         href: 'irsaviewer/irsaviewer/gator.html',
//         items: [
//             {
//                 id: 'gator.plot',
//                 title: 'Plot',
//                 href: 'irsaviewer/irsaviewer/gator.html#plot',
//                 hidden: true,
//             },
//             {
//                 id: 'gator.overlay',
//                 title: 'Overlay',
//                 href: 'irsaviewer/irsaviewer/gator.html#overlay',
//             },
//         ]
//     };

const toc_overview = {
    id: 'overview',
    title: 'IRSA Viewer: Overview',
    href: 'irsaviewer/overview.html',
    items: [
        {
            id: 'overview.terminology',
            title: 'Terminology',
            href: 'irsaviewer/overview.html#terminology',
        },
        {
            id: 'overview.tools',
            title: 'Tools Overview',
            href: 'irsaviewer/overview.html#tools',
        },
        {
            id: 'overview.login',
            title: 'User Login',
            href: 'irsaviewer/overview.html#login',
        },
        {
            id: 'overview.help',
            title: 'Getting More Help',
            href: 'irsaviewer/overview.html#help',
        },
    ]
};
const toc_basics = {
    id: 'basics',
    title: 'Basic Features and Functions',
    href: 'irsaviewer/basics.html',
    items: [
        {
            id: 'basics.catalog',
            title: 'Retrieving and Using Catalogs',
            href: 'irsaviewer/basics.html#irsacatalogs',
            hidden: true,
        },
        {
            id: 'basics.loadcatalog',
            title: 'Upload Your Own Catalogs',
            href: 'irsaviewer/basics.html#owncatalogs',
            hidden: true,
        },
        {
            id: 'basics.searching',
            title: 'Searching for Images',
            href: 'irsaviewer/basics.html#searching',
        },
        {
            id: 'basics.three-color',
            title: 'Making 3-color Images',
            href: 'irsaviewer/basics.html#3-color',
        },
        {
            id: 'basics.hips',
            title: 'HiPS Images',
            href: 'irsaviewer/basics.html#hips',
        },
        {
            id: 'basics.images',
            title: 'Interacting with Images',
            href: 'irsaviewer/basics.html#images',
        },
        {
            id: 'basics.catalogs',
            title: 'Interacting with Tables',
            href: 'irsaviewer/basics.html#catalogs',
        },
        {
            id: 'basics.charts',
            title: 'Creating Plots',
            href: 'irsaviewer/basics.html#charts',
        },
        {
            id: 'basics.help',
            title: 'Getting Help',
            href: 'irsaviewer/basics.html#help',
        },
        {
            id: 'basics.bgmon',
            title: 'Background Monitor',
            href: 'irsaviewer/basics.html#bgmon',
        },
    ]
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization Tools',
    href: 'irsaviewer/visualization.html',
    items: [
         {
            id: 'visualization.imageoptions',
            title: 'Image Toolbar',
            href: 'irsaviewer/visualization.html#toolbar',
            hidden: true,
        },
        {
            id: 'visualization.fitsDownloadOptions',
            title: 'Save Image',
            href: 'irsaviewer/visualization.html#fitsDownloadOptions',
            hidden: true,
        },
        {
            id: 'visualization.saveimage',
            title: 'Save Image',
            href: 'irsaviewer/visualization.html#saveimage',
            hidden: true,
        },
        {
            id: 'visualization.rotate',
            title: 'Rotation',
            href: 'irsaviewer/visualization.html#rotateImage',
            hidden: true,
        },
        {
            id: 'visualization.selectregion',
            title: 'Select Region',
            href: 'irsaviewer/visualization.html#selectregion',
            hidden: true,
        },
        {
            id: 'visualization.layers',
            title: 'Layers',
            href: 'irsaviewer/visualization.html#layers',
            hidden: true,
        },
        {
            id: 'visualization.ds9regions',
            title: 'ds9 Regions',
            href: 'irsaviewer/visualization.html#ds9regions',
            hidden: true,
        },
        {
            id: 'visualization.fitsViewer',
            title: 'The FITS/HiPS viewer',
            href: 'irsaviewer/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageinfo',
            title: 'Image Information',
            href: 'irsaviewer/visualization.html#imageinfo',
        },
        {
            id: 'visualization.toolbar',
            title: 'Image Toolbar',
            href: 'irsaviewer/visualization.html#toolbar',
        },
        {
            id: 'visualization.stretches',
            title: 'Color Stretches',
            href: 'irsaviewer/visualization.html#stretches',
        },
        {
            id: 'visualization.hipsViewer',
            title: 'Specific HiPS Features',
            href: 'irsaviewer/visualization.html#hipsViewer',
        },
        {
            id: 'visualization.footprints',
            title: 'Footprints',
            href: 'irsaviewer/visualization.html#footprints',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking out of the pane',
            href: 'irsaviewer/visualization.html#breakingout',
        },
        {
            id: 'visualization.loaded-images',
            title: 'Image Navigation',
            href: 'irsaviewer/visualization.html#imagenavigation',
             hidden: true,
       },
        {
            id: 'visualization.navigation',
            title: 'Image Navigation',
            href: 'irsaviewer/visualization.html#imagenavigation',
        },
        {
            id: 'visualization.wcs',
            title: 'WCS Alignment',
            href: 'irsaviewer/visualization.html#wcs',
        },
        {
            id: 'visualization.coverage',
            title: 'Coverage Image',
            href: 'irsaviewer/visualization.html#coverage',
        },
        {
            id: 'visualization.fitships',
            title: 'Automatic FITS-HiPS-Aitoff Transitions',
            href: 'irsaviewer/visualization.html#autozoom',
        },
    ]
};

const toc_tables = {
    id: 'tables',
    title: 'Tables',
    href: 'irsaviewer/tables.html',
    items: [
        {
            id: 'tables.tableoptions',
            title: 'Table Options',
            href: 'irsaviewer/tables.html#tableoptions',
            hidden: true,
        },
        {
            id: 'tables.header',
            title: 'Table Header',
            href: 'irsaviewer/tables.html#header',
        },
        {
            id: 'tables.columns',
            title: 'Table Columns',
            href: 'irsaviewer/tables.html#columns',
        },
        {
            id: 'tables.filters',
            title: 'Table Filters',
            href: 'irsaviewer/tables.html#filters',
        },
        {
            id: 'tables.save',
            title: 'Saving Tables',
            href: 'irsaviewer/tables.html#save',
        },
    ]
};


const toc_catalogs = {
    id: 'catalogs',
    title: 'Catalogs',
    href: 'irsaviewer/catalogs.html',
    items: [
        {
            id: 'catalogs.catalogs',
            title: 'IRSA Catalogs',
            href: 'irsaviewer/catalogs.html#catalogs',
             hidden: true,
        },
        {
            id: 'catalogs.irsacatalogs',
            title: 'IRSA Catalogs',
            href: 'irsaviewer/catalogs.html#irsacatalogs',
        },
        {
            id: 'catalogs.owncatalogs',
            title: 'Your Own Catalogs',
            href: 'irsaviewer/catalogs.html#owncatalogs',
        },
        {
            id: 'catalogs.vocatalogs',
            title: 'VO Catalogs',
            href: 'irsaviewer/catalogs.html#vocatalogs',
        },
        {
            id: 'catalogs.nedcatalogs',
            title: 'NED Catalogs',
            href: 'irsaviewer/catalogs.html#nedcatalogs',
        },
    ]
};

export const toc_plots = {
    id: 'plots',
    title: 'Plots',
    href: 'irsaviewer/plots.html',
    items: [
        {
            id: 'plots.default',
            title: 'Default Plot',
            href: 'irsaviewer/plots.html#default'
        },
        {
            id: 'plots.firstlook',
            title: 'Plot Format: A First Look',
            href: 'irsaviewer/plots.html#firstlook'
        },
        {
            id: 'plots.linking',
            title: 'Plot Linking',
            href: 'irsaviewer/plots.html#linking'
        },
        {
            id: 'plots.changing',
            title: 'Changing What is Plotted',
            href: 'irsaviewer/plots.html#changing'
        },
        {
            id: 'plots.manipulating',
            title: 'Plotting Manipulated Columns',
            href: 'irsaviewer/plots.html#manipulating'
        },
        {
            id: 'plots.restricting',
            title: 'Restricting What is Plotted',
            href: 'irsaviewer/plots.html#restricting'
        },
        {
            id: 'plots.saving',
            title: 'Saving Plots',
            href: 'irsaviewer/plots.html#saving'
        },
        {
            id: 'plots.adding',
            title: 'Adding Plots',
            href: 'irsaviewer/plots.html#adding'
        },
        {
            id: 'plots.example',
            title: 'Example Plots',
            href: 'irsaviewer/plots.html#example'
        },
    ]
};

const toc_overviewTSV = {
    id: 'overviewTSV',
    title: 'Time Series: Overview',
    href: 'irsaviewer/overviewTSV.html',
    items: [
        {
            id: 'overviewTSV.purpose',
            title: 'Purpose of Tool',
            href: 'irsaviewer/overviewTSV.html#purpose',
        },
        {
            id: 'overviewTSV.terminology',
            title: 'Terminology',
            href: 'irsaviewer/overviewTSV.html#terminology',
        },
        {
            id: 'overviewTSV.data',
            title: 'Data Sets Accepted',
            href: 'irsaviewer/overviewTSV.html#data',
        },
        {
            id: 'overviewTSV.docs',
            title: 'Documentation Contents',
            href: 'irsaviewer/overviewTSV.html#docs',
        },
    ]
};
const toc_loadingTSV = {
    id: 'loadingTSV',
    title: 'Time Series: Loading in a Time Series',
    href: 'irsaviewer/loadingTSV.html',
    items: [
        {
            id: 'loadingTSV.settings',
            title: 'Main Options',
            href: 'irsaviewer/loadingTSV.html#mainoptions',
        },
        {
            id: 'loadingTSV.data',
            title: 'Data Sets Accepted',
            href: 'irsaviewer/loadingTSV.html#data',
        },
        {
            id: 'loadingTSV.requirements',
            title: 'Table Requirements',
            href: 'irsaviewer/loadingTSV.html#requirements',
        },
        {
            id: 'loadingTSV.formatting',
            title: 'Table Formatting',
            href: 'irsaviewer/loadingTSV.html#formatting',
        },
        {
            id: 'loadingTSV.default',
            title: 'Default Columns',
            href: 'irsaviewer/loadingTSV.html#default',
        },
        {
            id: 'loadingTSV.newtable',
            title: 'New Tables',
            href: 'irsaviewer/loadingTSV.html#newtable',
        },
        {
            id: 'loadingTSV.cancel',
            title: 'Cancelling',
            href: 'irsaviewer/loadingTSV.html#cancel',
        },

    ]
};
const toc_main1TSV = {
    id: 'main1TSV',
    title: 'Time Series: Main Screen, Initial View',
    href: 'irsaviewer/main1TSV.html',
    items: [
        {
            id: 'main1TSV.settings',
            title: 'Settings',
            href: 'irsaviewer/main1TSV.html#settings',
        },
        {
            id: 'main1TSV.table',
            title: 'Table',
            href: 'irsaviewer/main1TSV.html#table',
        },
        {
            id: 'main1TSV.plot',
            title: 'Plot',
            href: 'irsaviewer/main1TSV.html#plot',
        },
        {
            id: 'main1TSV.images',
            title: 'Images',
            href: 'irsaviewer/main1TSV.html#images',
        },
    ]
};
const toc_findpTSV = {
    id: 'findpTSV',
    title: 'Time Series: Period Finder',
    href: 'irsaviewer/findpTSV.html',
    items: [
        {
            id: 'findpTSV.initialview',
            title: 'Initial View',
            href: 'irsaviewer/findpTSV.html#initialview',
        },
        {
            id: 'findpTSV.settings',
            title: 'Settings',
            href: 'irsaviewer/findpTSV.html#settings',
        },
        {
            id: 'findpTSV.plot',
            title: 'Plot',
            href: 'irsaviewer/findpTSV.html#plot',
        },
        {
            id: 'findpTSV.pgram',
            title: 'Calculate Periodogram',
            href: 'irsaviewer/findpTSV.html#pgram',
        },
        {
            id: 'findpTSV.pgramresults',
            title: 'Periodogram Results',
            href: 'irsaviewer/findpTSV.html#pgramresults',
        },
        {
            id: 'findpTSV.acceptp',
            title: 'Accepting a Period',
            href: 'irsaviewer/findpTSV.html#acceptp',
        },
    ]
};
const toc_main2TSV = {
    id: 'main2TSV',
    title: 'Time Series: After Period Finding',
    href: 'irsaviewer/main2TSV.html',
    items: [
        {
            id: 'main2TSV.settings',
            title: 'Settings',
            href: 'irsaviewer/main2TSV.html#settings',
        },
        {
            id: 'main2TSV.tables',
            title: 'Tables',
            href: 'irsaviewer/main2TSV.html#tables',
        },
        {
            id: 'main2TSV.plot',
            title: 'Plot',
            href: 'irsaviewer/main2TSV.html#plot',
        },
        {
            id: 'main2TSV.images',
            title: 'Images',
            href: 'irsaviewer/main2TSV.html#images',
        },
    ]
};
const toc_saveTSV = {
    id: 'saveTSV',
    title: 'Time Series: Saving Results',
    href: 'irsaviewer/saveTSV.html',
    items: [
        {
            id: 'saveTSV.tables',
            title: 'Tables',
            href: 'irsaviewer/saveTSV.html#tables',
        },
        {
            id: 'saveTSV.plots',
            title: 'Plots',
            href: 'irsaviewer/saveTSV.html#plots',
        },
        {
            id: 'saveTSV.singleimages',
            title: 'Single Images',
            href: 'irsaviewer/saveTSV.html#singleimages',
        },
        {
            id: 'saveTSV.multipleimages',
            title: 'Multiple Images',
            href: 'irsaviewer/saveTSV.html#multipleimages',
        },
    ]
};


const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'irsaviewer/user.html',
};

const toc_faq = {
    id: 'faq',
    title: 'FAQs',
    href: 'irsaviewer/faq.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'IRSA Privacy Notice',
    href: 'irsaviewer/privacy.html',
};



// TODO: I will leave comments that should be cleaned up once you have a working
// understanding of the framework.  When you do, feel free to insert comments
// that make the most sense to you on how to write new help at the bottom of ./firefly/src/onlinehelp/src/index.js
// This way, we'll have somewhere to go to when it's no longer fresh in our heads.



/*
  Terminology:

  HelpItem
  --------
  HelpItem is one piece of help.  In a tree terminology, it can be a leaf(no items) or a branch(with subitems).
  A HelpItem consists of these properties:
    {string}   id      unique ID of the help item.  This is used by the application to link or jump to a section of onlinehelp.
    {string}   title   title of this item
    {string}   href    link to html content for this help item
    {boolean}  hidden  default false.  When true, entry will not be shown in the navigation tree.
    {object}   style   additional style to apply to this item
    [HelpItem] items   array of HelpItems.  This is how you create subitems if any.

  Table Of Contents (TOC)
  ----------------------
  TOC is the topmost level of onlinehelp.  You define one by declaring it as an array of HelpItems.
  It has to be exported at the end of the file, so it can be used by the build process to create pdf version.
*/

/*
  Here, I am creating a table of contents based on how I interpret the code to be from below.
  There has to be a bug or something because the results are not the same.
  However, you should use myToc construct to build what you want instead of the coding method in wasMyToc.
  If you want to see how wasMyToc looks like, simply replace the last line and rerun gradle run.
    export const toc = myToc;
  with
    export const toc = wasMyToc;
*/
let myToc = [
    //{href: 'irsaviewer/overview.html', title: 'IRSA Viewer: Overview'},
    toc_overview,
    toc_basics,
    toc_visualization,
    toc_tables,
    toc_catalogs,
    toc_plots,
    toc_overviewTSV,
    toc_loadingTSV,
    toc_main1TSV,
    toc_findpTSV,
    toc_main2TSV,
    toc_saveTSV,
    toc_user,
    toc_faq,
    toc_privacy,
];




// let wasMyToc = replace(fireflyToc, '0.href', 'overview.html');
// myToc = replace(fireflyToc, '0.title', 'IRSA Viewer: Overview');
// //let myToc = replace(fireflyToc, '0', toc_overview);
// //myToc = add(fireflyToc, '1', toc_overview);
// myToc = replace(fireflyToc, '0', toc_overview);
// 
// // want overview from here, basics from here, visualization, tables, catalogs from
// // here, then all the TSV sections (from here), then login and privacy.
// // this is not how it is working
// 
// // 1= visualization
// // 2 = tables
// // 3 = catalogs, replace
// 
// myToc = add(fireflyToc, '1', toc_overview);
// myToc = add(fireflyToc, '2', toc_basics);
// 
// //myToc = replace(fireflyToc, '4.href', 'catalogs.html');
// //myToc = replace(fireflyToc, '4.title', 'IRSA Viewer: Catalogs');
// myToc = replace(fireflyToc, '3', toc_catalogs);
// 
// myToc = add(fireflyToc, '4', toc_overviewTSV);
// myToc = add(fireflyToc, '5', toc_loadingTSV);
// myToc = add(fireflyToc, '6', toc_main1TSV);
// myToc = add(fireflyToc, '7', toc_findpTSV);
// myToc = add(fireflyToc, '8', toc_main2TSV);
// myToc = add(fireflyToc, '9', toc_saveTSV);


//myToc = replace(myToc, '3.items.0.title', 'new title');

// export it as toc
export default myToc;
