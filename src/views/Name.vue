<template>
    <div>
        <b-card>
            <b-card-body>
                       
                <div class="col-md-6">
                    <div class="card top-buffer">
                        <b-img src="../images/avatar.png" 
                        alt:nameDetail.DisplayName 
                        title:nameDetail.DisplayName/>
                        <div class="cardcontainer">
                            <h4><b>{{nameDetail.DisplayName}}</b></h4>
                            <p>{{nameDetail.DisplayPostnominals}}</p>
                            <p>
                                <span class="strong">Display on Web?</span> {{IsPersonDisplayOnWebPage}}
                            </p>

                            <p>
                                <span class="strong">
                                    College Phone Number:
                                </span>{{phone.Telephone}}
                            </p>
                            <p>
                                <span class="strong">
                                    Current Room(s):
                                </span>{{phone.Room}}
                            </p>

                        </div>
                    </div>
                </div>
        <div id="nameView" class="col-md-6">
                        <h4>Name Details</h4>
                        
                        <table class="table table-striped table-bordered">
                            <tr>
                                <td>Title</td>
                                <td>{{nameDetail.Title}}</td>
                            </tr>
                            <tr>
                                <td>Forenames</td>
                                <td>{{nameDetail.Forenames}}</td>
                            </tr>

                            <tr>
                                <td>Surname</td>
                                <td>{{nameDetail.Surname}}</td>
                            </tr>
                            <tr>
                                <td>Display Name</td>
                                <td>{{nameDetail.DisplayName}}</td>
                            </tr>

                            <tr>
                                <td>College Username</td>
                                <td>{{nameDetail.CollegeUsername}}</td>
                            </tr>
                            <tr>
                                <td>Other Names</td>
                                <td>{{nameDetail.OtherNames}}</td>
                            </tr>
                        </table>
                        <a href="#" class="btn btn-primary btn-xs top-buffer edit" id="editName">Edit&nbsp;<i class="fas fa-edit" aria-hidden="true"></i></a>
                    </div>

</b-card-body>
</b-card>
    </div>  
</template>

<script>
//import axios from "axios";

import NProgress from "nprogress";
export default {
  data() {
    return {
      nameDetail: {},
      phone: {},
      IsPersonDisplayOnWebPage: "No"
    };
  },
  computed: {
    // a computed getter
    IsPersonDisplayOnWebPage: function() {
      if (this.nameDetail.PersonDisplayOnWebPage) {
        this.IsPersonDisplayOnWebPage = "Yes";
      }
    }
  },
  created() {
    NProgress.start();

    this.axios
      .get("/api/PersonDetails/GetPersonDetail/9")
      .then(response => {
        console.log(response.data);
        this.nameDetail = response.data.person;
        this.phone = response.data.phone;
        NProgress.done();
      })
      .catch(e => {
        //console.error(e);
      });
  }
};
</script>

<style>
</style>
