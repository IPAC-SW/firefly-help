

/*
  This is where you create the table of contents for Gator onlinehelp.
  Say, if I want to reuse 'login', toc_privacy and 'catalogs' from firefly's onlinehelp,
  I would import it like I did above.

  Then, I place it into myToc where I want it at.
  Every HelpItem must have a unique id.  If you don't, it will not highlight correctly when clicked on.
*/

const toc_overview = {
    id: 'overview',
    title: 'IRTF: Overview',
    href: 'irtf/overview.html',
};


const toc_searching = {
    id: 'searching',
    title: 'Searching',
    href: 'irtf/searching.html',
};


const toc_tables = {
    id: 'tables',
    title: 'Tables',
    href: 'irtf/tables.html',
    items: [
        {
            id: 'tables.tableoptions',
            title: 'Table Options',
            href: 'irtf/tables.html#tableoptions',
            hidden: true,
        },
        {
            id: 'tables.header',
            title: 'Table Header',
            href: 'irtf/tables.html#header',
        },
        {
            id: 'tables.columns',
            title: 'Table Columns',
            href: 'irtf/tables.html#columns',
        },
        {
            id: 'tables.filters',
            title: 'Table Filters',
            href: 'irtf/tables.html#filters',
        },
        {
            id: 'tables.cells',
            title: 'Table Cells',
            href: 'irtf/tables.html#cells',
        },
        {
            id: 'tables.save',
            title: 'Saving Tables',
            href: 'irtf/tables.html#save',
        },
    ]
};

const toc_results = {
    id: 'results',
    title: 'Results',
    href: 'irtf/results.html',
};

const toc_downloads = {
    id: 'downloads',
    title: 'Downloads',
    href: 'irtf/downloads.html',
};

const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'irtf/user.html',
};

const toc_faq = {
    id: 'faq',
    title: 'FAQs',
    href: 'irtf/faq.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'IRSA Privacy Notice',
    href: 'irtf/privacy.html',
};


let myToc = [
    //{href: 'irtf/overview.html', title: 'Catalog Search Tool: Overview'},
    toc_overview,
    toc_searching,
    toc_results,
    toc_tables,
    toc_downloads,
    toc_user,
    toc_faq,
    toc_privacy,
];


// export it as toc
export default myToc;
