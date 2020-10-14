

/*
  This is where you create the table of contents for Gator onlinehelp.
  Say, if I want to reuse 'login', toc_privacy and 'catalogs' from firefly's onlinehelp,
  I would import it like I did above.

  Then, I place it into myToc where I want it at.
  Every HelpItem must have a unique id.  If you don't, it will not highlight correctly when clicked on.
*/

const toc_overview = {
    id: 'overview',
    title: 'Atlas: Overview',
    href: 'atlas/overview.html',
};


const toc_searching = {
    id: 'searching',
    title: 'Searching',
    href: 'atlas/searching.html',
    items: [
        {
            id: 'searching.targetselection',
            title: 'Target Selection',
            href: 'atlas/searching.html#targetselection',
        },
        {
            id: 'searching.MapClick',
            title: 'Map Click',
            href: 'atlas/searching.html#MapClick',
        },
        {
            id: 'searching.SingleObject',
            title: 'Single Object',
            href: 'atlas/searching.html#SingleObject',
        },
        {
            id: 'searching.MultiObject',
            title: 'Multi-Object',
            href: 'atlas/searching.html#MultiObject',
        },
        {
            id: 'searching.searchsize',
            title: 'Search Size',
            href: 'atlas/searching.html#searchsize',
        },
        {
            id: 'searching.references',
            title: 'References',
            href: 'atlas/searching.html#references',
        },
    ]
};



const toc_tables = {
    id: 'tables',
    title: 'Tables',
    href: 'atlas/tables.html',
    items: [
        {
            id: 'tables.tableoptions',
            title: 'Table Options',
            href: 'atlas/tables.html#tableoptions',
            hidden: true,
        },
        {
            id: 'tables.header',
            title: 'Table Header',
            href: 'atlas/tables.html#header',
        },
        {
            id: 'tables.columns',
            title: 'Table Columns',
            href: 'atlas/tables.html#columns',
        },
        {
            id: 'tables.filters',
            title: 'Table Filters',
            href: 'atlas/tables.html#filters',
        },
        {
            id: 'tables.cells',
            title: 'Table Cells',
            href: 'atlas/tables.html#cells',
        },
        {
            id: 'tables.save',
            title: 'Saving Tables',
            href: 'atlas/tables.html#save',
        },
    ]
};


const toc_results = {
    id: 'results',
    title: 'Results',
    href: 'atlas/results.html',
    items: [
        {
            id: 'results.MapClick',
            title: 'Map Click',
            href: 'atlas/results.html#MapClick',
        },
        {
            id: 'results.SingleObject',
            title: 'Single Object',
            href: 'atlas/results.html#SingleObject',
        },
        {
            id: 'results.MultiObject',
            title: 'Multi-Object',
            href: 'atlas/results.html#MultiObject',
        },
        {
            id: 'results.noresults',
            title: 'No Results',
            href: 'atlas/results.html#noresults',
        },
        {
            id: 'results.bgdata',
            title: 'Background Data Sets',
            href: 'atlas/results.html#bgdata',
        },
        {
            id: 'results.results',
            title: 'Result Categories',
            href: 'atlas/results.html#results',
        },
        {
            id: 'results.bulk',
            title: 'Bulk Download',
            href: 'atlas/results.html#bulk',
        },
    ]
};

const toc_api = {
    id: 'api',
    title: 'API',
    href: 'atlas/api.html',
    items: [
        {
            id: 'api.introduction',
            title: 'Introduction',
            href: 'atlas/api.html#introduction',
        },
        {
            id: 'api.inputparam',
            title: 'Input Parameters',
            href: 'atlas/api.html#inputparams',
        },
        {
            id: 'api.examples',
            title: 'Examples',
            href: 'atlas/api.html#examples',
        },
        {
            id: 'api.xmloutput',
            title: 'XML Output',
            href: 'atlas/api.html#xmloutput',
        },
        {
            id: 'api.xmltag',
            title: 'Description of XML Tags',
            href: 'atlas/api.html#xmltag',
        },
    ]
};

const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'atlas/user.html',
};

const toc_faq = {
    id: 'faq',
    title: 'FAQs',
    href: 'atlas/faq.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'IRSA Privacy Notice',
    href: 'atlas/privacy.html',
};


let myToc = [
    //{href: 'atlas/overview.html', title: 'Atlas: Overview'},
    toc_overview,
    toc_searching,
    toc_results,
    toc_tables,
    toc_api,
    toc_user,
    toc_faq,
    toc_privacy,
];


// export it as toc
export default myToc;
