<template>
    <div>
  
    <b-pagination size="sm" >
    </b-pagination>

      <vue-tree-navigation :items="items"   />

    </div>
</template>

<script>
//import VueTreeNavigation from 'vue-tree-navigation';

export default {
  data() {
    return {
      items: [
        {
          name: "Details",
          children: [
            { name: "Name", path: "name" },
            { name: "Summary", path: "summary" },
            { name: "Subjects", path: "subjects" },
            { name: "Contact Information", path: "contact" },
            { name: "Images", path: "images" },
            { name: "Post-nominals", path: "post" },
            { name: "Files", path: "files" },
            { name: "Rights", path: "rights" },
            { name: "Historic Data", path: "historic" },
            { name: "Other", path: "other" },
            { name: "Assets", path: "assets" },
            { name: "Contact Information", path: "contact" }
          ]
        },
        {
          name: "Roles",

          children: [
            { name: "Fellowship", path: "contact" },
            { name: "Responsibilities", path: "Responsibilities" },
            { name: "Appointments", path: "contact" }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.treeview .list-group-item {
  cursor: pointer;
}

.treeview span.indent {
  margin-left: 10px;
  margin-right: 10px;
}

.treeview span.icon {
  width: 12px;
  margin-right: 5px;
}

.treeview .node-disabled {
  color: silver;
  cursor: not-allowed;
}
</style>
