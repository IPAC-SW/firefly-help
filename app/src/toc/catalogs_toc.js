

// build up your table of contents here...

const toc_overview = {
    id: 'overview',
    title: 'Catalog Search Tool: Overview',
    href: 'catalogs/overview.html',
};


const toc_searching = {
    id: 'searching',
    title: 'Searching',
    href: 'catalogs/searching.html',
    items: [
        {
            id: 'searching.SelectingCatalog',
            title: 'Selecting a Catalog',
            href: 'catalogs/searching.html#SelectingCatalog',
        },
        {
            id: 'searching.Building',
            title: 'Building a Query',
            href: 'catalogs/searching.html#Building',
        },
        {
            id: 'searching.SingleObject',
            title: 'Single Object',
            href: 'catalogs/searching.html#SingleObject',
        },
        {
            id: 'searching.searchmethods',
            title: 'Search Methods',
            href: 'catalogs/searching.html#searchmethods',
        },
        {
            id: 'searching.MultiObject',
            title: 'Multi Object',
            href: 'catalogs/searching.html#MultiObject',
        },
        {
            id: 'searching.AllSky',
            title: 'All-Sky',
            href: 'catalogs/searching.html#AllSky',
        },
        {
            id: 'searching.Options',
            title: 'Search Options',
            href: 'catalogs/searching.html#Options',
        },
        {
            id: 'searching.OutputColumn',
            title: 'Output Column Selection',
            href: 'catalogs/searching.html#OutputColumn',
        },
        {
            id: 'searching.ColumnConstraints',
            title: 'Column Constraints',
            href: 'catalogs/searching.html#ColumnConstraints',
        },
        {
            id: 'searching.order',
            title: 'Order of Results',
            href: 'catalogs/searching.html#order',
        },
        {
            id: 'searching.RunningQuery',
            title: 'Running the Query',
            href: 'catalogs/searching.html#RunningQuery',
        },
        {
            id: 'searching.Tips',
            title: 'Tips for Fast Queries',
            href: 'catalogs/searching.html#Tips',
        },
        {
            id: 'searching.examples',
            title: 'Examples',
            href: 'catalogs/searching.html#examples',
        },
    ]
};

const toc_additionalconstraints = {
    id: 'additionalconstraints',
    title: 'Additional Constraints',
    href: 'catalogs/additionalconstraints.html',
    items: [
       {
            id: 'additionalconstraints.context',
            title: 'Context',
            href: 'catalogs/additionalconstraints.html#context',
        },
        {
            id: 'additionalconstraints.list',
            title: 'List of Operators',
            href: 'catalogs/additionalconstraints.html#list',
        },
    ]
};

const toc_sso = {
    id: 'sso',
    title: 'Moving Objects',
    href: 'catalogs/sso.html',
    items: [
       {
            id: 'sso.overview',
            title: 'Overview',
            href: 'catalogs/sso.html#overview',
        },
       {
            id: 'sso.objname',
            title: 'Object Name',
            href: 'catalogs/sso.html#objname',
        },
       {
            id: 'sso.mpc',
            title: 'MPC Input',
            href: 'catalogs/sso.html#mpc',
        },
       {
            id: 'sso.orbit',
            title: 'Orbit Element Input',
            href: 'catalogs/sso.html#orbit',
        },
       {
            id: 'sso.time',
            title: 'Observation Time',
            href: 'catalogs/sso.html#time',
        },
    ]
};


const toc_api = {
    id: 'api',
    title: 'API',
    href: 'catalogs/api.html',
    items: [
        {
            id: 'api.overview',
            title: 'Overview',
            href: 'catalogs/api.html#overview',
        },
        {
            id: 'api.quick',
            title: 'Quick Start',
            href: 'catalogs/api.html#quick',
        },
        {
            id: 'api.construct',
            title: 'Constructing a Query',
            href: 'catalogs/api.html#construct',
        },
        {
            id: 'api.objstr',
            title: 'Objstr Keyword',
            href: 'catalogs/api.html#objstr',
        },
        {
            id: 'api.examples',
            title: 'Query URL Examples',
            href: 'catalogs/api.html#examples',
        },
        {
            id: 'api.moving',
            title: 'Moving Objects',
            href: 'catalogs/api.html#moving',
        },
    ]
};

const toc_tables = {
    id: 'tables',
    title: 'Tables',
    href: 'catalogs/tables.html',
    items: [
        {
            id: 'tables.tableoptions',
            title: 'Table Options',
            href: 'catalogs/tables.html#tableoptions',
            hidden: true,
        },
        {
            id: 'tables.header',
            title: 'Table Header',
            href: 'catalogs/tables.html#header',
        },
        {
            id: 'tables.columns',
            title: 'Table Columns',
            href: 'catalogs/tables.html#columns',
        },
        {
            id: 'tables.filters',
            title: 'Table Filters',
            href: 'catalogs/tables.html#filters',
        },
        {
            id: 'tables.save',
            title: 'Saving Tables',
            href: 'catalogs/tables.html#save',
        },
    ]
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization Tools',
    href: 'catalogs/visualization.html',
    items: [
        {
            id: 'visualization.Rotate',
            title: 'Rotation',
            href: 'catalogs/visualization.html#rotateImage',
            hidden: true,
        },
        {
            id: 'visualization.selectregion',
            title: 'Select Region',
            href: 'catalogs/visualization.html#selectregion',
            hidden: true,
        },
        {
            id: 'visualization.layers',
            title: 'Layers',
            href: 'catalogs/visualization.html#layers',
            hidden: true,
        },
        {
            id: 'visualization.ds9regions',
            title: 'ds9 Regions',
            href: 'catalogs/visualization.html#ds9regions',
            hidden: true,
        },
        {
            id: 'visualization.fitsViewer',
            title: 'The FITS/HiPS viewer',
            href: 'catalogs/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageinfo',
            title: 'Image Information',
            href: 'catalogs/visualization.html#imageinfo',
        },
        {
            id: 'visualization.toolbar',
            title: 'Image Toolbar',
            href: 'catalogs/visualization.html#toolbar',
        },
        {
            id: 'visualization.newimage',
            title: 'New Image',
            href: 'catalogs/visualization.html#newimage',
        },
        {
            id: 'visualization.stretches',
            title: 'Color Stretches',
            href: 'catalogs/visualization.html#stretches',
        },
        {
            id: 'visualization.hipsViewer',
            title: 'Specific HiPS Features',
            href: 'catalogs/visualization.html#hipsViewer',
        },
        {
            id: 'visualization.footprints',
            title: 'Footprints',
            href: 'catalogs/visualization.html#footprints',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking out of the pane',
            href: 'catalogs/visualization.html#breakingout',
        },
        {
            id: 'visualization.fitships',
            title: 'Automatic FITS-HiPS-Aitoff Transitions',
            href: 'catalogs/visualization.html#autozoom',
        },
    ]
};


export const toc_plots = {
    id: 'plots',
    title: 'Plots',
    href: 'catalogs/plots.html',
    items: [
        {
            id: 'plots.default',
            title: 'Default Plot',
            href: 'catalogs/plots.html#default'
        },
        {
            id: 'plots.firstlook',
            title: 'Plot Format: A First Look',
            href: 'catalogs/plots.html#firstlook'
        },
        {
            id: 'plots.linking',
            title: 'Plot Linking',
            href: 'catalogs/plots.html#linking'
        },
        {
            id: 'plots.changing',
            title: 'Changing What is Plotted',
            href: 'catalogs/plots.html#changing'
        },
        {
            id: 'plots.manipulating',
            title: 'Plotting Manipulated Columns',
            href: 'catalogs/plots.html#manipulating'
        },
        {
            id: 'plots.restricting',
            title: 'Restricting What is Plotted',
            href: 'catalogs/plots.html#restricting'
        },
        {
            id: 'plots.saving',
            title: 'Saving Plots',
            href: 'catalogs/plots.html#saving'
        },
        {
            id: 'plots.examples',
            title: 'Examples',
            href: 'catalogs/plots.html#examples'
        },
    ]
};


const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'catalogs/user.html',
};

const toc_faq = {
    id: 'faq',
    title: 'FAQs',
    href: 'catalogs/faq.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'IRSA Privacy Notice',
    href: 'catalogs/privacy.html',
};



let myToc = [
    //{href: 'catalogs/overview.html', title: 'Catalog Search Tool: Overview'},
    toc_overview,
    toc_searching,
    toc_additionalconstraints,
    toc_sso,
    toc_visualization,
    toc_tables,
    toc_plots,
    toc_api,
    toc_user,
    toc_faq,
    toc_privacy,
];

// export it as toc
export default myToc;
