import "./navigation.css";

const navigationsArray = ["Theme Demo", "Shop", "ProductHot", "Blog", "Pages", "New In", "Trend", "Collections", "Buy Ella"];

export function Navigations()
{
    const navigation = document.createElement("div");
    navigation.className = "navigation";

    const nav = document.createElement("nav");
    nav.className = "navigator";

    const list = document.createElement("ul");
    list.className = "list";

    navigationsArray.forEach(function(item)
    {
        const items = document.createElement("li");
        items.className = "items";

        const link = document.createElement("a");
        link.className = "link";
        link.href = "/";

        list.appendChild(items);
        items.appendChild(link);

        link.innerHTML = item;
    });

    navigation.append(nav);
    nav.append(list);


    return navigation;
}