const init = function () {
    const base32Digits = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v']

    const uuid32 = (length = 15) => (prefix = "") => (suffix = "") => {
        //Creates a random 10 digit base 32
        let id = "";
        for (let i = 0; i < length; i++) {
            id +=  base32Digits[Math.floor(Math.random()*32)];
        }
        return prefix + id + suffix;
    }

    const getId = uuid32(10)("id_")

    const generateTableOfContents = function () {
        const headingsSelector = [1,2,3,4,5]
            .map(x => '.notes  h' +  x)
            .join(", ")

        const $tocList = $('.tableOfContents-topicsList');

        const $headings = $(headingsSelector)

        $headings.toArray().forEach(heading  => {
            const $heading = $(heading);
            const level = Number($heading.prop("tagName").charAt(1));
            $heading
                .addClass(`topicHeading-level${level}`)
                .attr('id', getId())
                ;

            const link = `<li class="tableOfContents-li tableOfContents-li-level${level}"><a href="#${$heading.attr('id')}">${$heading.text()}</a></li>`
            $tocList.append(link)

        }) //End of forEach
    } //End of generateTableOfContents
    generateTableOfContents();
}


$(init()  )



// const generateTableOfContents = function () {
//     const baseTopicHeadingName = "topicHeading-level";

//     const headingsSelector = [1,2,3,4,5]
//         .map(x => "." +  baseTopicHeadingName + x)
//         .join(", ")

//     const $tocList = $('.tableOfContents-topicsList');

//     const $headings = $(headingsSelector)

//     $headings.toArray().forEach(heading  => {
//         const $heading = $(heading);

//         $heading.attr('id', getId() )

//         const level  =  Number( $heading.attr("class")
//             .charAt(
//                 $heading.attr("class")
//                 .search(baseTopicHeadingName) + baseTopicHeadingName.length
//             )
//         )

//         const link = `<li class="tableOfContents-li tableOfContents-li-level${level}"><a href="#${$heading.attr('id')}">${$heading.text()}</a></li>`
//         $tocList.append(link)

//     }) //End of forEach
// } //End of generateTableOfContents