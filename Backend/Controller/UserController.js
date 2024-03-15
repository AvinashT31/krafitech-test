import User from "../Modal/UserSchema.js"
import Student from "../Modal/StudentSchema.js"
import Prop from "../Modal/PropertySchema.js"

export const adminregister = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        if (!name) return res.send("name is required")
        if (!email) return res.send("email is required")
        if (!password) return res.send("number is required")

        const isemailpresent = await User.findOne({ email: email });

        if (isemailpresent) {
            return res.json({ status: 201, message: "email is already present" })
        }

        const user = new User({
            name: name,
            email: email,
            password: password
        })

        await user.save();
        return res.json({ status: 200, message: "registration successfully" })
    } catch (error) {
        return res.send(error)
    }
}

export const adminlogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) return res.send("email is required")
        if (!password) return res.send("number is required")

        const userData = await User.findOne({ email, password });

        if (userData) {
            return res.json({ status: 200, message: "login successfully" })
        }
        return res.json({ status: 400, message: "login invalid" })


    } catch (error) {
        return res.send(error)
    }
}


export const studentregister = async (req, res) => {
    try {
        try {
            const { name, email, password } = req.body;
            if (!name) return res.send("name is required")
            if (!email) return res.send("email is required")
            if (!password) return res.send("number is required")

            const isemailpresent = await Student.findOne({ email: email });

            if (isemailpresent) {
                return res.json({ status: 201, message: "email is already present" })
            }

            const user = new Student({
                name: name,
                email: email,
                password: password
            })

            await user.save();
            return res.json({ status: 200, message: "registration successfully" })
        } catch (error) {
            return res.send(error)
        }

    } catch (error) {
        return res.send(error)
    }
}


export const studentlogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) return res.send("email is required")
        if (!password) return res.send("number is required")

        const studentData = await Student.findOne({ email, password });

        if (studentData) {
            return res.json({ status: 200, message: "login successfully", studentinfo:studentData})
        }
        return res.json({ status: 400, message: "login invalid" })


    } catch (error) {
        return res.send(error)
    }
}


export const propertyregister = async (req, res) => {

    try {
        const { name, address, number } = req.body

        if (!name) return res.send("name is required")
        if (!address) return res.send("address is required")
        if (!number) return res.send("number is required")

        const property = new Prop({
            name: name,
            address: address,
            number: number,
        })
        console.log(property, "property") 
        await property.save();
        return res.json({ status: 200, message: "property uploaded" })

    } catch (error) {
        return res.send(error)
    }
}

export const showproperty = async (req, res) => {
    try{
        const showproperty = await Prop.find({});
        console.log(showproperty, "showproperty");
        return res.send(showproperty)

    }catch (error) {
        return res.send(error)
    }
}
