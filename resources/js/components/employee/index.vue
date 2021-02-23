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
                                        <a
                                            href="#"
                                            class="btn btn-sm btn-primary"
                                            >Edit</a
                                        >
                                        <a
                                            href="#"
                                            class="btn btn-sm btn-danger"
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
        }
    },
    created() {
        this.allEmployees();
    }
};
</script>
<style lang="text/css"></style>
