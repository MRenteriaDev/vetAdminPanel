<template lang="">
    <div class="">
        <div class="row">
            <router-link to="/store-employee" class="btn btn-primary"
                >Add Employees</router-link
            >
        </div>
        <br />
        <input
            type="search"
            class="form-control"
            v-model="searchTerm"
            style="width: 300px"
            placeholder="Search here by name..."
        />
        <br />
        <div class="row">
            <div class="col-lg-12 mb-4">
                <!-- Simple Tables -->
                <div class="card">
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                    >
                        <h6 class="m-0 font-weight-bold text-primary">
                            All Employees
                        </h6>
                    </div>
                    <div class="table-responsive">
                        <table class="table align-items-center table-flush">
                            <thead class="thead-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Photo</th>
                                    <th>Phone</th>
                                    <th>Sallery</th>
                                    <th>Joining Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="employee in filterSearch"
                                    :key="employee.id"
                                >
                                    <td>
                                        <a href="#">{{ employee.name }}</a>
                                    </td>
                                    <td>
                                        <img
                                            :src="employee.photo"
                                            id="em_photo"
                                            style="width: 40px; height: 40px;"
                                        />
                                    </td>
                                    <td>{{ employee.phone }}</td>
                                    <td>{{ employee.sallery }}</td>
                                    <td>
                                        <span class="badge badge-success">{{
                                            employee.joinig_date
                                        }}</span>
                                    </td>
                                    <td>
                                        <router-link :to="{name: 'edit-employee', params:{id: employee.id}}" class="btn btn-sm btn-primary">Edit</router-link>
                                        <a
                                            @click="deleteEmployee(employee.id)"
                                            class="btn btn-sm btn-danger"
                                            style="color: #ffffff;"
                                            >Delete</a
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            employees: [],
            searchTerm: ""
        };
    },
    computed: {
        filterSearch() {
            return this.employees.filter(employee => {
                return employee.name.match(this.searchTerm);
            });
        }
    },
    methods: {
        allEmployees() {
            axios
                .get("/api/employee/")
                .then(({ data }) => (this.employees = data))
                .catch();
        },
        deleteEmployee(id) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(result => {
                if (result.value) {
                    axios
                        .delete("/api/employee/" + id)
                        .then(() => {
                            this.employees = this.employees.filter(employee => {
                                return (employee.id = id);
                            });
                        })
                        .catch(() => {
                            this.$router.push({ name: "index-employee" });
                        });
                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                    );
                    window.location.reload();
                }
            });
        }
    },
    created() {
        this.allEmployees();
    }
};
</script>
<style lang="text/css"></style>
