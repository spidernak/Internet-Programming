<div id="formInsertData">
    <form class="contain" action="./api/storeImage" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="grid-item name">
            <label for="name">Name</label>
            <input id="name" type="text" name="name">
        </div>
        <div class="grid-item type">
            <label for="type">Type</label>
            <input name="type" id="type" type="type">
        </div>
        <div class="grid-item image">
            <label for="image">Image</label>
            <input id="image" type="file" name="image">
        </div>
        <div class="grid-item button">
            <a href="/gallery">
                Cancel
            </a>
            <button type="submit" class="insert">Insert</button>
        </div>
    </form>
</div>

<style>
    #formInsertData {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    #formInsertData a {
        text-decoration: none;
        border: 1px solid black;
        padding: 5px 10px;
        background-color: rgb(240, 240, 240);
        color: black;
    }

    #formInsertData .contain {
        display: grid;
        grid-template-columns: repeat(2, 300px);
        grid-template-areas:
            "name type"
            "image image"
            "button button";
        grid-gap: 15px;
        padding: 50px 15px;
        border: black 1px solid;
        width: fit-content;
    }

    #formInsertData .grid-item {
        padding: 0px;
        background-color: white;
        text-align: start;
        display: flex;
        width: 100%;
    }

    #formInsertData .grid-item input {
        flex-grow: 1;
    }

    #formInsertData .grid-item label {
        width: 50px;
    }

    #formInsertData .name {
        grid-area: name;
    }

    #formInsertData .type {
        grid-area: type;
    }

    #formInsertData .button {
        grid-area: button;
        display: flex;
        gap: 10px;

        justify-content: flex-end;

    }

    #formInsertData .button .insert {
        background-color: royalblue;
        color: white;
    }

    #formInsertData .button button {
        padding: 5px 10px;
        cursor: pointer;
    }
</style>
