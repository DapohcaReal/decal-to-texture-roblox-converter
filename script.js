function convert() {
  const id = document.getElementById("decalId").value.trim();
  const output = document.getElementById("output");
  const preview = document.getElementById("preview");

  if (!/^\d+$/.test(id)) {
    output.textContent = "Please enter a valid numeric decal ID.";
    preview.style.display = "none";
    return;
  }

  const textureUrl = `rbxassetid://${id}`;
  const cdnPreview = `https://www.roblox.com/asset-thumbnail/image?assetId=${id}`;

  output.textContent = `Texture ID: ${textureUrl}`;
  preview.src = cdnPreview;
  preview.style.display = "block";
}
function generateScript() {
  const id = document.getElementById("decalId").value.trim();
  const output = document.getElementById("luauOutput");

  if (!/^\d+$/.test(id)) {
    output.textContent = "// Please enter a valid numeric decal ID";
    return;
  }

  output.textContent = `local asset = game:GetService("InsertService"):LoadAsset(${id})
local decal = asset:GetChildren()[1]
print("Resolved Texture URL:", decal.Texture)`;
}
