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
        <h5>{{ project.p_id }}</h5>
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
        <h4>{{ blog.content }}</h4>
        <p>{{ blog.date }}</p>
      </li>
    </ul>
  </div>

  <div>
    <h1>Create New Project</h1>
    <form @submit.prevent="createProject"> <!-- prevent refresh after sumbmit -->
      <div>
        <label for="name">Project Name : </label>
        <input type="text" v-model="newProject.name" id="name" required/>
      </div>
      <div>
        <label for="description">Project Description : </label>
        <textarea name="description" v-model="newProject.description" id="description"></textarea>
      </div>
      <button type="submit">Create Project</button>
    </form>
  </div>

  <div>
    <h1>Delete Project</h1>
    <form @submit.prevent="deleteProject">
      <div>
        <label for="name">Project Name : </label>
        <input type="text" v-model="removeProject.name" d="name" required/>
      </div>
      <button type="submit">Delete</button>
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

      newProject.value.name = ""; //clear the form
      newProject.value.description = "";
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const removeProject = ref({
    name: "",
  });

  const deleteProject = async () => {
    console.log(removeProject.value);
    try {
      const response = await fetch("http://localhost:5000/projects", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(removeProject.value),
      });

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      // Remove the deleted project from the projects array
      const index = projects.value.findIndex(project => project.name === removeProject.value.name);
      if (index !== -1) {
        projects.value.splice(index, 1);
      }

      removeProject.value.name = ""; // Clear the form
    } catch (error) {
      console.error("Error:", error);
    }
  }
</script>