<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        }
    }
}
</script>

<style scoped>
button {
    /* text-decoration: none; */
    padding: 0.75rem 1.5rem;
    font: inherit;
    background-color: #7b3b80;
    /* border: 1px solid #7b3b80; */
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    /* margin-right: 0.5rem; */
    display: inline-block;
    /* transition: all 0.4s ease-in; */
}

button:hover,
button:active {
    background-color: #612166;
    border-color: #612166;
    /* border-radius: 30px; */
}

.flat {
    background-color: transparent;
    color: #44792a;
    border: none;
}

.outline {
    background-color: transparent;
    border-color: #7b3b80;
    color: #44792a;
}

.flat:hover,
.flat:active {
    background-color: #7b3b80;
    color: #fff;
}
.outline:hover,
.outline:active {
    background-color: transparent;
    border: 1px solid #44792a;
    
}
</style>