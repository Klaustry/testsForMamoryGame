import puppeteer from "puppeteer";

describe("Проверка работы приложения...", () => {
  let browser;
  let page;
  let cards;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    await page.goto("http://localhost:3000");
    await page.waitForSelector(".makeStyles-headerWrapper-7");
  });

  it("Проверка загружена ли страница...", async () => {
    const text = await page.$eval(
      ".makeStyles-headerWrapper-7",
      (e) => e.textContent
    );
    expect(text).toContain("Memory game by maxAkkerman");
  });

  it("Проверка Наличия карточек...", async () => {
    cards = await page.$$eval(".makeStyles-cardWrapper-8 div img", (el) =>
      el.map((x) => x.getAttribute("src"))
    );
    console.log(cards);
    expect(cards.length).toBe(4);
  });

  it("Проверка на нажатие одинаковых карточек...", async () => {
    let i = 0;
    const card2 = cards.lastIndexOf(cards[0]);
    while (cards[0] === cards[i]) {
      i++;
    }
    const card4 = cards.lastIndexOf(cards[i]);

    console.log(0);
    console.log(card2);
    console.log(i);
    console.log(card4);

    const c1 = await page.click(
      `.makeStyles-cardWrapper-8:nth-child(${0 + 1})`
    );
    const c2 = await page.click(
      `.makeStyles-cardWrapper-8:nth-child(${card2 + 1})`
    );
    await page.waitForTimeout(2000);
    const c3 = await page.click(
      `.makeStyles-cardWrapper-8:nth-child(${i + 1})`
    );
    const c4 = await page.click(
      `.makeStyles-cardWrapper-8:nth-child(${card4 + 1})`
    );
  });

  it("Проверка наличия кнопки - перезагрузить...", async () => {
    await page.waitForSelector(".makeStyles-gameResetBtn-2");
    const text = await page.$eval(
      ".makeStyles-gameResetBtn-2",
      (e) => e.innerHTML
    );
    //console.log(text);
    expect(text).toContain("Reset");
  });

  afterAll(() => {
    browser.close();
  });
});
