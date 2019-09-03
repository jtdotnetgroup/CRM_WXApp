const Mock=require('mockjs')

const random=Mock.Random

const userprofile=function(){
    return {
        userName:random.cname()
    }
}

export function randomColor(){
    return random.color();
}

random.extend({
    customIndex(){
        const arr=['分配客户','自寻客户']
        return this.pick(arr)
    },
    customStatus(){
        const arr=['线索客户','成交客户','商机客户']
        return this.pick(arr)
    },
    contactMethod(){
        const arr=['电话联系','邮件联系','上门拜访']
        return this.pick(arr)
    }
})

export function dashboard(){
    
    return Mock.mock({
        'list':[
            {'title':'客户数量','number|100-2000':100,'color':random.color()},
            {'title':'商机客户','number|100-2000':100,'color':random.color()},
            {'title':'成效客户','number|100-2000':100,'color':random.color()},
            {'title':'失败客户','number|100-2000':100,'color':random.color()},
            {'title':'本月业绩','number|100-2000':100,'color':random.color()},
            {'title':'本月完成率','number|100-2000':100,'color':random.color()},
            {'title':'本年指标','number|100-2000':100,'color':random.color()},
            {'title':'本年完成率','number|100-2000':100,'color':random.color()},
        ]
    }).list
}

const customlist=()=>{
    
    const data=[];

    const count=20;

    for (let i = 0; i < count; i++) {
        data.push({
            custName:random.cword(3,5)+'有限公司',
                customIndex:random.customIndex(),
                addr: random.city(true),
                status:random.customStatus(),
                contact:{
                    name:random.cname(),
                    phone: '13' + random.string('0123456789', 9),
                },
                createTime:random.date('yyyy-MM-dd'),
                followTime:random.date('yyyy-MM-dd'),
                updateTime:random.date('yyyy-MM-dd')
        })
        
    }

    return data
}

const followrecordlist=()=>{
    const data=[]
    const count=random.natural(4,8)
    const empName=random.cname()

    for (let i = 0; i  < count; i++) {
        data.push({
            followTime:random.date('yyyy-MM-dd HH:mm:ss'),
            empName,
            contactMethod:random.contactMethod(),
            content:random.csentence(5,150),
            comments:random.natural(1,5)
        })
    }

    return data;
}



Mock.mock('/customer/getall','get',customlist)
Mock.mock('/public_customer/getall','get',customlist)
Mock.mock('/followrecord/getall','get',followrecordlist)
Mock.mock('/login',userprofile)