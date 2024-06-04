<template>
  <div>
    <h1>My name is {{ name }}</h1>
  </div>

  <div>
    <h2>Projects</h2>
    <div v-if="pending">Loading projects...</div>
    <div v-if="error">Error 404 not found</div>
    <ul>
      <li v-for="project in projects" :key="project.name">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </div>

  <div>
    <h2>Blogs</h2>
    <div v-if="pending1">Loading blogs...</div>
    <div v-if="error1">Error 404 not found</div>
    <ul>
      <li v-for="blog in blogs" :key="blog.title">
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.content }}</p>
        <p>{{ blog.date }}</p>
      </li>
    </ul>
  </div>

  <div>
    <h1>Create New Project</h1>
    <form @submit.prevent="createProject"> <!-- prevent refresh after sumbmit -->
      <div>
        <label for="name">Project Name : </label>
        <input type="text" v-model="newProject.name" id="name" required />
      </div>
      <div>
        <label for="description">Project Description : </label>
        <textarea name="description" v-model="newProject.description" id="description"></textarea>
      </div>
      <button type="submit">Create Project</button>
    </form>
  </div>

  <div>
    <h1>Update Project</h1>
    <form @submit.prevent="updateProject">
      <div>
        <label for="id">Project ID : </label>
        <select name="id" v-model="modifyProject.id" id="id">
          <option v-for="project in projects" :value="project._id">{{ project.name }}</option>
        </select>
      </div>
      <div>
        <label for="name">New Project Name : </label>
        <input type="text" v-model="modifyProject.name" id="name" required />
      </div>
      <div>
        <label for="description">New Project Description : </label>
        <textarea name="description" v-model="modifyProject.description" id="description"></textarea>
      </div>
      <button type="submit">Update Project</button>
    </form>
  </div>
  <div>
    <h1>Delete Project</h1>
    <form @submit.prevent="deleteProject">
      <div>
        <label for="id">Project ID : </label>
        <select v-model="removeProject.id" id="id">
          <option v-for="project in projects" :value="project._id">{{ project.name }}</option>
        </select>
      </div>
      <button type="submit">Delete Project</button>
    </form>
  </div>
</template>

<script setup>
const name = "Ishan Hansaka Silva";
const { data: projects, pending, error, } = useFetch("http://localhost:5000/projects");
const { data: blogs, pending1, error1, } = useFetch("http://localhost:5000/blogs");

const newProject = ref({
  name: "",
  description: "",
});

const modifyProject = ref({
  id: "",
  name: "",
  description: "",
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
</script>
<style>
body {
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}

h1 {
  color: green;
}

h2 {
  color: blue;
}

ul {
  list-style-type: disc;
}

li {
  margin-bottom: 10px;
}

form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

form > div {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #000000;
}

input[type="text"],
textarea {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #000000;
}

input,
textarea,
select {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  font: 1em sans-serif;
}

input[type="text"]:focus,
textarea:focus {
    border-color: #007bff;
}

button {
  padding: 10px;
  font-size: 15px;
  background-color: #ff7300;
  color: #ffffff;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ffffff;
}
</style>