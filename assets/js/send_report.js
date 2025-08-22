document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.querySelectorAll("input")[0].value.trim();
    const title = document.querySelectorAll("input")[1].value.trim();
    const description = document.querySelector("textarea").value.trim();
    const file = document.getElementById("file");

    const webhookUrl = "https://discord.com/api/webhooks/1408477314295136337/Pz792A2HneupIyfMu37vfu3-VpS-8n9pPu5JKj559Ah6NoXRytdrJZLnnZO8B0slJhaZ";

    const embed = {
        embeds: [
            {
                title: `${title}`,
                description: description,
                color: 0xfcdd64,
                footer: {
                    text: `Reported by ${username}`
                }
            }
        ]
    };

    try {
        const res = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(embed)
        });

        if (res.ok) {

            if (file && file.files.length > 0) {
                const formData = new FormData();
                formData.append("file", file.files[0]);

                const res2 = await fetch(webhookUrl, {
                    method: "POST",
                    body: formData
                });

                if (!res2.ok) throw new Error("Failed to send file");
            }

            document.getElementById("form").style.display = "none";
            document.getElementById("success").style.display = "block";
        } else {
            alert("Failed to send report!");
        }
    } catch (err) {
        console.error(err);
        alert("Error while sending the report!");
    }
});