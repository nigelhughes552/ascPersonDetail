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
            { name: "Summary", path: "about" },
            { name: "Contact Information", path: "details" }
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
