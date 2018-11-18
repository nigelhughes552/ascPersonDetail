<template>
    <div>
  <h6>Large</h6>
    <b-pagination size="sm"  v-model="currentPage" >
    </b-pagination>
         <div class="col-md-12">
                    <div id="tree" class="treeview">
                      <ul class="list-group"><li class="list-group-item node-tree node-selected" data-nodeid="0" 
                      style="color:#FFFFFF;background-color:#428bca;">
                      <span class="icon glyphicon"></span><span class="icon node-icon"></span>
                      Overview</li><li class="list-group-item node-tree" data-nodeid="1" 
                      style="color:undefined;background-color:undefined;">
                      <span class="icon expand-icon glyphicon glyphicon-chevron-down"></span><span class="icon node-icon"></span>
                      Detail</li><li class="list-group-item node-tree" data-nodeid="2" style="color:undefined;background-color:undefined;"><span class="indent"></span><span class="icon glyphicon"></span><span class="icon node-icon"></span>Name</li><li class="list-group-item node-tree" data-nodeid="3" style="color:undefined;background-color:undefined;"><span class="indent"></span><span class="icon glyphicon"></span><span class="icon node-icon"></span>Summary</li><li class="list-group-item node-tree" data-nodeid="4" style="color:undefined;background-color:undefined;"><span class="indent"></span><span class="icon glyphicon"></span><span class="icon node-icon"></span>Contact Information</li><li class="list-group-item node-tree" data-nodeid="5" style="color:undefined;background-color:undefined;"><span class="indent"></span><span class="icon glyphicon"></span><span class="icon node-icon"></span>Subjects</li><li class="list-group-item node-tree" data-nodeid="6" style="color:undefined;background-color:undefined;"><span class="indent"></span><span class="icon glyphicon"></span><span class="icon node-icon"></span>Images</li><li class="list-group-item node-tree" data-nodeid="7" style="color:undefined;background-color:undefined;"><span class="indent"></span><span class="icon glyphicon"></span><span class="icon node-icon"></span>Post-nominals</li><li class="list-group-item node-tree" data-nodeid="8" style="color:undefined;background-color:undefined;"><span class="indent"></span><span class="icon glyphicon"></span><span class="icon node-icon"></span>Files</li><li class="list-group-item node-tree" data-nodeid="9" style="color:undefined;background-color:undefined;"><span class="indent"></span><span class="icon glyphicon"></span><span class="icon node-icon"></span>Rights</li><li class="list-group-item node-tree" data-nodeid="10" style="color:undefined;background-color:undefined;"><span class="indent"></span><span class="icon glyphicon"></span><span class="icon node-icon"></span>Historic Data</li><li class="list-group-item node-tree" data-nodeid="11" style="color:undefined;background-color:undefined;"><span class="indent"></span><span class="icon glyphicon"></span><span class="icon node-icon"></span>Other</li><li class="list-group-item node-tree" data-nodeid="12" style="color:undefined;background-color:undefined;"><span class="indent"></span><span class="icon glyphicon"></span><span class="icon node-icon"></span>Assets</li><li class="list-group-item node-tree" data-nodeid="13" style="color:undefined;background-color:undefined;"><span class="icon expand-icon glyphicon glyphicon-chevron-right"></span><span class="icon node-icon"></span>Roles</li><li class="list-group-item node-tree" data-nodeid="17" style="color:undefined;background-color:undefined;"><span class="icon expand-icon glyphicon glyphicon-chevron-right"></span><span class="icon node-icon"></span>Background</li><li class="list-group-item node-tree" data-nodeid="22" style="color:undefined;background-color:undefined;"><span class="icon expand-icon glyphicon glyphicon-chevron-right"></span><span class="icon node-icon"></span>Research</li><li class="list-group-item node-tree" data-nodeid="25" style="color:undefined;background-color:undefined;"><span class="icon glyphicon"></span><span class="icon node-icon"></span>Associated People</li><li class="list-group-item node-tree" data-nodeid="26" style="color:undefined;background-color:undefined;"><span class="icon glyphicon"></span><span class="icon node-icon"></span>Deceased</li></ul></div>
                </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
