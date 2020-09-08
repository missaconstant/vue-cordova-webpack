let fs      = require('fs');
let path    = require('path');
let page    = process.argv[2];
let content = null;

page = page.charAt(0).toUpperCase() + page.substring(1) + 'Page';

content = ` <!-- auto generated page -->
<template>
    <v-ons-page id="${ page }">
        <v-ons-toolbar>
            <div class="center">
                ${ page }
            </div>
        </v-ons-toolbar>

        <p>Here on the ${ page }</p>
    </v-ons-page>
</template>

<script>
export default ${ page } {
    name: '${ page }'
}
</script>
`;

const dir = path.join(__dirname, '../src/Pages/' + page);

fs.mkdirSync( dir );

fs.writeFile(
    path.join(dir, page + '.vue'),
    content,
    () => {
        console.log(`Page ${ page } successfully created !`);
    }
);
