# FIPE Scraper 🚗📊

An automated web scraper that retrieves the **monthly FIPE price** of a specific car (Volkswagen Gol 2010), sends the updated value via **email**, and logs the data into a **Google Spreadsheet** using the [SheetsDB](https://sheetsdb.io/) API — all triggered via a scheduled **cron job**.

## 🎯 Objectives

- ✅ Scrape the **official FIPE price** for a specific car model from the web.
- ✅ Automatically run the task **monthly using cron**.
- ✅ Send an **email notification** with the updated price.
- ✅ Append the new value to a **Google Sheet**, using SheetsDB for simple API access.

## 🛠 Tech Stack

- **TypeScript**
- **Puppeteer** – Web scraping (headless browser)
- **Nodemailer** – Email delivery
- **SheetsDB** – Simple Google Sheets API abstraction
- **Cron** – Job scheduling
- **Dayjs** – Date formatting
- **Dotenv** – Environment variable management

## ⚙️ How It Works

1. A `cron` job triggers the script every month.
2. **Puppeteer** opens the FIPE website and scrapes the price of the **Volkswagen Gol 2010**.
3. The script:
   - Sends an email with the new price via **Nodemailer**.
   - Logs the value + timestamp to a **Google Sheet** via **SheetsDB**.

## 🚀 Possible Future Improvements

- Support scraping multiple car models
- Add a basic dashboard to visualize price trends
