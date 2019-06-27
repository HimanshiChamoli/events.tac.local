function createCommentItem(form,path)
{
    var service = new Itemservice({ url: '/sitecore/api/ssc/item' });
    window.alert('thanks.Your message will show on the site shortly1');
    var obj = {
        ItemName: 'comment -' + form.name.value,
        TemplateID: '{E8CCBF92-95D5-4855-90E4-9CD31EDDA475}',
        Name: form.name.value,
        Comment: form.comment.value

    };
    window.alert('thanks.Your message will show on the site shortly2');
    service.create(obj)
        .path(path)
        .execute()
        .then(function (item) {
            form.name.value = form.comment.value = '';
            window.alert('thanks.Your message will show on the site shortly');
        })
        .fail(function (err) {
            window.alert(err);
        });
            event.preventDefault();
            return false;
       
}