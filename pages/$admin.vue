<template>
    <div class="container mx-auto p-4">
        <div class="flex justify-center items-center">
            <h1 class="text-5xl font-bold mb-10 underline">Admin Portal</h1>
        </div>

        <!-- Two-column layout -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">

            <!-- Left Column: Projects and Blogs -->
            <div class="col-span-3">

                <!-- Projects -->
                <div class="mb-10 ">
                    <h2 class="admin-title">Projects</h2>
                    <div v-if="pendingProject" class="admin-pending">Loading projects...</div>
                    <div v-if="errorProject" class="admin-error">Error 404 not found</div>
                    <ul class="list-disc pl-5">
                        <li v-for="project in projects" :key="project.name" class="mb-4">
                            <h3 class="content-title">{{ project.name }}</h3>
                            <p class="content-description">{{ project.description }}</p>
                            <a :href="project.github_link" class="content-link">{{ project.github_link
                                }}</a>
                            <ul>
                                <li class="inline-block mr-4" v-for="(tool, index) in project.tools" :key="index">{{
                                    tool }}</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <!-- Blogs -->
                <div class="mb-10">
                    <h2 class="admin-title">Blogs</h2>
                    <div v-if="pendingBlog" class="admin-pending">Loading blogs...</div>
                    <div v-if="errorBlog" class="admin-error">Error 404 not found</div>
                    <ul class="list-disc pl-5">
                        <li v-for="blog in blogs" :key="blog.title" class="mb-4">
                            <h3 class="content-title">{{ blog.title }}</h3>
                            <p class="content-description">{{ blog.content }}</p>
                            <p class="text-gray-600 text-sm">{{ blog.date }}</p>
                            <a :href="blog.medium_link" class="content-link">{{ blog.medium_link }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Right Column: Forms -->
            <div class="space-y-8 col-span-2">

                <div class="flex mb-1">
                    <div class="mx-2">
                        <label for="entity" class="input-label">Select Entity:</label>
                        <select v-model="selectedEntity" id="entity" class="w-full p-2 border border-gray-300 rounded">
                            <option value="project">Project</option>
                            <option value="blog">Blog</option>
                        </select>
                    </div>
                    <div class="mx-2">
                        <label for="action" class="input-label">Select Action:</label>
                        <select v-model="selectedAction" id="action" class="w-full p-2 border border-gray-300 rounded">
                            <option value="create">Create</option>
                            <option value="update">Update</option>
                            <option value="delete">Delete</option>
                        </select>
                    </div>
                </div>

                <!-- Create Project -->
                <div>
                    <h1 class="admin-title">Create New Project</h1>
                    <form @submit.prevent="createProject" class="admin-form">
                        <div class="mb-4">
                            <label for="name" class="input-label">Project Name :</label>
                            <input type="text" v-model="newProject.name" id="name" required class="input-text" />
                        </div>
                        <div class="mb-4">
                            <label for="description" class="input-label">Project Description :</label>
                            <textarea v-model="newProject.description" id="description" class="input-text"></textarea>
                        </div>
                        <div class="mb-4">
                            <label for="github_link" class="input-label">Github Repository Link :</label>
                            <input type="text" v-model="newProject.github_link" id="github_link" required
                                class="input-text" />
                        </div>
                        <div class="mb-4">
                            <label for="tools" class="input-label">Tools :</label>
                            <div v-for="(tool, index) in newProject.tools" :key="index" class="flex items-center mb-2">
                                <input type="text" v-model="newProject.tools[index]" class="input-text mr-2" />
                                <button @click.prevent="removeTool(newProject.tools, index)"
                                    class="btn btn-danger">Remove</button>
                            </div>
                            <button @click.prevent="addTool(newProject.tools)" class="btn">Add Tool</button>
                        </div>
                        <button type="submit" class="btn">Create Project</button>
                    </form>
                </div>

                <!-- Update Project -->
                <div>
                    <h1 class="admin-title">Update Project</h1>
                    <form @submit.prevent="updateProject" class="admin-form">
                        <div class="mb-4">
                            <label for="id" class="input-label">Project ID :</label>
                            <select v-model="modifyProject.id" id="id" class="input-text">
                                <option v-for="project in projects" :value="project._id">{{ project.name }}</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="name" class="input-label">New Project Name :</label>
                            <input type="text" v-model="modifyProject.name" id="name" required class="input-text" />
                        </div>
                        <div class="mb-4">
                            <label for="description" class="input-label">New Project Description :</label>
                            <textarea v-model="modifyProject.description" id="description"
                                class="input-text"></textarea>
                        </div>
                        <div class="mb-4">
                            <label for="github_link" class="input-label">New Github Repository Link :</label>
                            <input type="text" v-model="modifyProject.github_link" id="github_link" required
                                class="input-text" />
                        </div>
                        <div class="mb-4">
                            <label for="tools" class="input-label">Tools :</label>
                            <div v-for="(tool, index) in modifyProject.tools" :key="index"
                                class="flex items-center mb-2">
                                <input type="text" v-model="modifyProject.tools[index]" class="input-text mr-2" />
                                <button @click.prevent="removeTool(modifyProject.tools, index)"
                                    class="btn btn-danger">Remove</button>
                            </div>
                            <button @click.prevent="addTool(modifyProject.tools)" class="btn">Add Tool</button>
                        </div>
                        <button type="submit" class="btn">Update Project</button>
                    </form>
                </div>

                <!-- Delete Project -->
                <div>
                    <h1 class="admin-title">Delete Project</h1>
                    <form @submit.prevent="deleteProject" class="admin-form">
                        <div class="mb-4">
                            <label for="id" class="input-lable">Project ID :</label>
                            <select v-model="removeProject.id" id="id"
                                class="w-full p-2 border border-gray-300 rounded">
                                <option v-for="project in projects" :value="project._id">{{ project.name }}</option>
                            </select>
                        </div>
                        <button type="submit" class="btn">Delete
                            Project</button>
                    </form>
                </div>

                <!-- Create Blog -->
                <div>
                    <h1 class="text-2xl font-bold mb-4">Create New Blog</h1>
                    <form @submit.prevent="createBlog" class="admin-form">
                        <div class="mb-4">
                            <label for="title" class="input-lable">Blog Title :</label>
                            <input type="text" v-model="newBlog.title" id="title" required class="input-text" />
                        </div>
                        <div class="mb-4">
                            <label for="content" class="input-lable">Blog Content :</label>
                            <textarea v-model="newBlog.content" id="content" class="input-text"></textarea>
                        </div>
                        <div class="mb-4">
                            <label for="date" class="input-lable">Blog Date :</label>
                            <input type="date" v-model="newBlog.date" id="date" required class="input-text" />
                        </div>
                        <div class="mb-4">
                            <label for="medium_link" class="input-lable">Medium Link :</label>
                            <input type="text" v-model="newBlog.medium_link" id="medium_link" required
                                class="input-text" />
                        </div>
                        <button type="submit" class="btn">Create
                            Blog</button>
                    </form>
                </div>

                <!-- Update Blog -->
                <div>
                    <h1 class="admin-title">Update Blog</h1>
                    <form @submit.prevent="updateBlog" class="admin-form">
                        <div class="mb-4">
                            <label for="id" class="input-lable">Blog ID :</label>
                            <select v-model="modifyBlog.id" id="id" class="input-text">
                                <option v-for="blog in blogs" :value="blog._id">{{ blog.title }}</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="title" class="input-lable">New Blog Title :</label>
                            <input type="text" v-model="modifyBlog.title" id="title" required class="input-text" />
                        </div>
                        <div class="mb-4">
                            <label for="content" class="input-lable">New Blog Content :</label>
                            <textarea v-model="modifyBlog.content" id="content" class="input-text"></textarea>
                        </div>
                        <div class="mb-4">
                            <label for="date" class="input-lable">New Blog Date :</label>
                            <input type="date" v-model="modifyBlog.date" id="date" required class="input-text" />
                        </div>
                        <div class="mb-4">
                            <label for="medium_link" class="input-lable">New Medium Link :</label>
                            <input type="text" v-model="modifyBlog.medium_link" id="medium_link" required
                                class="input-text" />
                        </div>
                        <button type="submit" class="btn">Update
                            Blog</button>
                    </form>
                </div>

                <!-- Delete Blog -->
                <div>
                    <h1 class="admin-title">Delete Blog</h1>
                    <form @submit.prevent="deleteBlog" class="admin-form">
                        <div class="mb-4">
                            <label for="id" class="input-lable">Blog ID :</label>
                            <select v-model="removeBlog.id" id="id" class="w-full p-2 border border-gray-300 rounded">
                                <option v-for="blog in blogs" :value="blog._id">{{ blog.title }}</option>
                            </select>
                        </div>
                        <button type="submit" class="btn">Delete
                            Blog</button>
                    </form>
                </div>
                
            </div>
        </div>
    </div>

</template>

<script setup>
const { data: projects, pending: pendingProject, error: errorProject } = useFetch("http://localhost:5000/projects");
const { data: blogs, pending: pendingBlog, error: errorBlog } = useFetch("http://localhost:5000/blogs");

definePageMeta({
    layout: false
})

const newProject = ref({
    name: "",
    description: "",
    github_link: "",
    tools: [""],
});

const modifyProject = ref({
    id: "",
    name: "",
    description: "",
    github_link: "",
    tools: [],
});

const removeProject = ref({
    id: "",
});

const createProject = async () => {
    console.log(newProject.value);
    try {
        const response = await fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProject.value),
        });

        if (!response.ok) {
            throw new Error("Failed to create project");
        }

        const result = await response.json();
        projects.value.push(result); //push data to front end

        newProject.value.name = ""; // Clear the input field
        newProject.value.description = "";
        newProject.value.github_link = "";
        newProject.value.tools = [""];
    } catch (error) {
        console.error("Error:", error);
    }
}

const updateProject = async () => {
    console.log(modifyProject.value);
    try {
        const response = await fetch(`http://localhost:5000/projects/${modifyProject.value.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(modifyProject.value),
        });

        if (!response.ok) {
            throw new Error("Failed to update project");
        }

        const result = await response.json(); // Update the project in the local list
        const index = projects.value.findIndex((project) => project._id === modifyProject.value.id);
        if (index !== -1) {
            projects.value[index] = result;
        }

        modifyProject.value.id = ""; // Clear the input field
        modifyProject.value.name = "";
        modifyProject.value.description = "";
        modifyProject.value.github_link = "";
        modifyProject.value.tools = [];
    } catch (error) {
        console.error("Error:", error);
    }
}

const deleteProject = async () => {
    console.log(removeProject.value);
    try {
        const response = await fetch(`http://localhost:5000/projects/${removeProject.value.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to delete project");
        }

        const result = await response.json(); // Update the project in the local list
        const index = projects.value.findIndex((project) => project._id === removeProject.value.id);
        if (index !== -1) {
            projects.value.splice(index, 1);
        }

        removeProject.value.id = ""; // Clear the input field
    } catch (error) {
        console.error("Error:", error);
    }
}

const newBlog = ref({
    title: "",
    content: "",
    date: "",
    medium_link: "",
});

const modifyBlog = ref({
    id: "",
    title: "",
    content: "",
    date: "",
    medium_link: "",
});

const removeBlog = ref({
    id: "",
});

const createBlog = async () => {
    console.log(newBlog.value);
    try {
        const response = await fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBlog.value),
        });

        if (!response.ok) {
            throw new Error("Failed to create blog");
        }

        const result = await response.json();
        blogs.value.push(result); //push data to front end

        newBlog.value.title = ""; // Clear the input field
        newBlog.value.content = "";
        newBlog.value.date = "";
        newBlog.value.medium_link = "";
    } catch (error) {
        console.error("Error:", error);
    }
}

const updateBlog = async () => {
    console.log(modifyBlog.value);
    try {
        const response = await fetch(`http://localhost:5000/blogs/${modifyBlog.value.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(modifyBlog.value),
        });

        if (!response.ok) {
            throw new Error("Failed to update blog");
        }

        const result = await response.json(); // Update the blog in the local list
        const index = blogs.value.findIndex((blog) => blog._id === modifyBlog.value.id);
        if (index !== -1) {
            blogs.value[index] = result;
        }

        modifyBlog.value.id = ""; // Clear the input field
        modifyBlog.value.title = "";
        modifyBlog.value.content = "";
        modifyBlog.value.date = "";
        modifyBlog.value.medium_link = "";
    } catch (error) {
        console.error("Error:", error);
    }
}

const deleteBlog = async () => {
    console.log(removeBlog.value);
    try {
        const response = await fetch(`http://localhost:5000/blogs/${removeBlog.value.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to delete blog");
        }

        const result = await response.json(); // Update the blog in the local list
        const index = blogs.value.findIndex((blog) => blog._id === removeBlog.value.id);
        if (index !== -1) {
            blogs.value.splice(index, 1);
        }

        removeBlog.value.id = ""; // Clear the input field
    } catch (error) {
        console.error("Error:", error);
    }
}

const addTool = (toolsArray) => {
    toolsArray.push("");
};

const removeTool = (toolsArray, index) => {
    toolsArray.splice(index, 1);
};

const populateModifyProject = (project) => {
    modifyProject.value = { ...project };
};
</script>
<style scoped>
form>div {
    margin-bottom: 15px;
    text-align: left;
}
</style>