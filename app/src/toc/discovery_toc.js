

/*
  This is where you create the table of contents for Gator onlinehelp.
  Say, if I want to reuse 'login', toc_privacy and 'catalogs' from firefly's onlinehelp,
  I would import it like I did above.

  Then, I place it into myToc where I want it at.
  Every HelpItem must have a unique id.  If you don't, it will not highlight correctly when clicked on.
*/

const toc_overview = {
    id: 'overview',
    title: 'Data Discovery Tool: Overview',
    href: 'discovery/overview.html',
};


const toc_searching = {
    id: 'searching',
    title: 'Searching',
    href: 'discovery/searching.html',
    items: [
        {
            id: 'searching.SingleObject',
            title: 'Single Object',
            href: 'discovery/searching.html#SingleObject',
        },
        {
            id: 'searching.searchmethods',
            title: 'Search Methods',
            href: 'discovery/searching.html#searchmethods',
        },
    ]
};


const toc_tables = {
    id: 'tables',
    title: 'Tables',
    href: 'discovery/tables.html',
    items: [
        {
            id: 'tables.tableoptions',
            title: 'Table Options',
            href: 'discovery/tables.html#tableoptions',
            hidden: true,
        },
        {
            id: 'tables.header',
            title: 'Table Header',
            href: 'discovery/tables.html#header',
        },
        {
            id: 'tables.columns',
            title: 'Table Columns',
            href: 'discovery/tables.html#columns',
        },
        {
            id: 'tables.filters',
            title: 'Table Filters',
            href: 'discovery/tables.html#filters',
        },
        {
            id: 'tables.cells',
            title: 'Table Cells',
            href: 'discovery/tables.html#cells',
        },
        {
            id: 'tables.save',
            title: 'Saving Tables',
            href: 'discovery/tables.html#save',
        },
    ]
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization Tools',
    href: 'discovery/visualization.html',
    items: [
        {
            id: 'visualization.rotate',
            title: 'Rotation',
            href: 'discovery/visualization.html#rotateImage',
            hidden: true,
        },
        {
            id: 'visualization.selectregion',
            title: 'Select Region',
            href: 'discovery/visualization.html#selectregion',
            hidden: true,
        },
        {
            id: 'visualization.layers',
            title: 'Layers',
            href: 'discovery/visualization.html#layers',
            hidden: true,
        },
        {
            id: 'visualization.ds9regions',
            title: 'ds9 Regions',
            href: 'discovery/visualization.html#ds9regions',
            hidden: true,
        },
        {
            id: 'visualization.saveimage',
            title: 'Save Image',
            href: 'discovery/visualization.html#saveimage',
            hidden: true,
        },
        {
            id: 'visualization.zoomin',
            title: 'zoomin',
            href: 'discovery/visualization.html#zoomin',
            hidden: true,
        },
        {
            id: 'visualization.colortable',
            title: 'Color Table',
            href: 'discovery/visualization.html#colortable',
            hidden: true,
        },
        {
            id: 'visualization.fitsViewer',
            title: 'The FITS/HiPS viewer',
            href: 'discovery/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageinfo',
            title: 'Image Information',
            href: 'discovery/visualization.html#imageinfo',
        },
        {
            id: 'visualization.toolbar',
            title: 'Image Toolbar',
            href: 'discovery/visualization.html#toolbar',
        },
        {
            id: 'visualization.newimage',
            title: 'New Image',
            href: 'discovery/visualization.html#newimage',
        },
        {
            id: 'visualization.stretches',
            title: 'Color Stretches',
            href: 'discovery/visualization.html#stretches',
        },
        {
            id: 'visualization.hipsViewer',
            title: 'Specific HiPS Features',
            href: 'discovery/visualization.html#hipsViewer',
        },
        {
            id: 'visualization.footprints',
            title: 'Footprints',
            href: 'discovery/visualization.html#footprints',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking out of the pane',
            href: 'discovery/visualization.html#breakingout',
        },
        {
            id: 'visualization.changehips',
            title: 'Change HiPS',
            href: 'discovery/visualization.html#changehips',
            hidden: true,
        },
        {
            id: 'visualization.fitships',
            title: 'Automatic FITS-HiPS Transitions',
            href: 'discovery/visualization.html#autozoom',
        },
    ]
};


export const toc_plots = {
    id: 'plots',
    title: 'Plots',
    href: 'discovery/plots.html',
    items: [
        {
            id: 'plots.default',
            title: 'Default Plot',
            href: 'discovery/plots.html#default'
        },
        {
            id: 'plots.firstlook',
            title: 'Plot: A First Look',
            href: 'discovery/plots.html#firstlook'
        },
        {
            id: 'plots.linking',
            title: 'Plot Linking',
            href: 'discovery/plots.html#linking'
        },
        {
            id: 'plots.origin',
            title: 'What is it Plotting?',
            href: 'discovery/plots.html#origin'
        },
        {
            id: 'plots.changing',
            title: 'Changing What is Plotted',
            href: 'discovery/plots.html#changing'
        },
        {
            id: 'plots.restricting',
            title: 'Restricting What is Plotted',
            href: 'discovery/plots.html#restricting'
        },
        {
            id: 'plots.saving',
            title: 'Saving Plots',
            href: 'discovery/plots.html#saving'
        },
    ]
};


const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'discovery/user.html',
};

const toc_faq = {
    id: 'faq',
    title: 'FAQs',
    href: 'discovery/faq.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'IRSA Privacy Notice',
    href: 'discovery/privacy.html',
};


let myToc = [
    //{href: 'discovery/overview.html', title: 'Catalog Search Tool: Overview'},
    toc_overview,
    toc_searching,
    toc_visualization,
    toc_tables,
    toc_plots,
    toc_user,
    toc_faq,
    toc_privacy,
];


// export it as toc
export default myToc;
