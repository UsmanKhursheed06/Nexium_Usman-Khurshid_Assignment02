"use client"
import { useState } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Loader2,
  Globe,
  Check,
  AlertCircle,
  Sparkles,
  Brain,
  Languages,
  Zap,
  ArrowRight,
  BookOpen,
  Wand2,
} from "lucide-react"

interface SummaryResult {
  id: number
  blog_url: string
  title: string
  summary_english: string
  summary_urdu: string
  created_at: string
  word_count: number
  author?: string
}

interface ProcessingStatus {
  step: string
  status: "pending" | "processing" | "completed" | "error"
  message?: string
}

export default function HomePage() {
  const [url, setUrl] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<SummaryResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [processingSteps, setProcessingSteps] = useState<ProcessingStatus[]>([])
  const [showUrduTranslation, setShowUrduTranslation] = useState(false)

  const initializeSteps = (): ProcessingStatus[] => [
    { step: "Scraping blog content", status: "pending" },
    { step: "Generating summary", status: "pending" },
    { step: "Translating to Urdu", status: "pending" },
  ]

  const updateStep = (stepIndex: number, status: ProcessingStatus["status"], message?: string) => {
    setProcessingSteps((prev) => prev.map((step, index) => (index === stepIndex ? { ...step, status, message } : step)))
  }

  const validateUrl = (url: string): boolean => {
    try {
      const urlObj = new URL(url)
      return urlObj.protocol === "http:" || urlObj.protocol === "https:"
    } catch {
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) {
      setError("Please enter a blog URL")
      return
    }

    if (!validateUrl(url)) {
      setError("Please enter a valid URL (must start with http:// or https://)")
      return
    }

    setError(null)
    setResult(null)
    setIsProcessing(true)
    setProcessingSteps(initializeSteps())

    try {
      updateStep(0, "processing", "Extracting content from blog...")
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      updateStep(0, "completed", "Content extracted successfully")
      updateStep(1, "processing", "Generating summary...")
      updateStep(2, "processing", "Translating to Urdu...")

      const data = await response.json()

      updateStep(1, "completed", "Summary generated")
      updateStep(2, "completed", "Translation completed")

      setResult(data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred"
      setError(errorMessage)
      const currentStepIndex = processingSteps.findIndex((step) => step.status === "processing")
      if (currentStepIndex !== -1) {
        updateStep(currentStepIndex, "error", errorMessage)
      }
    } finally {
      setIsProcessing(false)
    }
  }

  const getStepIcon = (status: ProcessingStatus["status"]) => {
    switch (status) {
      case "completed":
        return <Check className="w-5 h-5 text-emerald-400" />
      case "processing":
        return <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-400" />
      default:
        return <div className="w-5 h-5 rounded-full border-2 border-slate-400/50" />
    }
  }

  const stepIcons = [Globe, Brain, Languages]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-6 py-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-200 font-medium">Powered by Advanced AI</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              AI Blog
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Summarizer
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Transform any blog post into concise summaries with instant Urdu translation. Experience the future of
              content consumption.
            </p>
          </motion.div>

          {/* Input Form */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  Enter Blog URL
                </CardTitle>
                <CardDescription className="text-slate-300 text-base">
                  Paste any blog URL and watch AI work its magic
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Input
                      type="url"
                      placeholder="https://example.com/amazing-blog-post"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="h-14 bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-lg rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      disabled={isProcessing}
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <BookOpen className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isProcessing || !url.trim()}
                    className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Processing Magic...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-5 h-5 mr-3" />
                        Analyze & Summarize
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </>
                    )}
                  </Button>

                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-300 p-4 rounded-xl backdrop-blur-sm"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Processing Steps */}
          <AnimatePresence>
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl text-white">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      AI Processing Pipeline
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Watch as AI transforms your content step by step
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {processingSteps.map((step, index) => {
                        const StepIcon = stepIcons[index]
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-sm"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-slate-700/50 rounded-lg">
                                <StepIcon className="w-5 h-5 text-slate-300" />
                              </div>
                              <div className="relative">{getStepIcon(step.status)}</div>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-white text-lg">{step.step}</div>
                              {step.message && <div className="text-slate-300 text-sm mt-1">{step.message}</div>}
                            </div>
                            {step.status === "processing" && (
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                            )}
                          </motion.div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Summary Output */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl text-white">
                      <div className="p-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      AI-Generated Summary
                    </CardTitle>
                    <CardDescription className="text-slate-300 text-base">
                      Your content, distilled to perfection
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <p className="text-white text-lg leading-relaxed whitespace-pre-wrap">{result.summary_english}</p>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <Button
                        variant="ghost"
                        onClick={() => setShowUrduTranslation(!showUrduTranslation)}
                        className="flex items-center gap-3 text-purple-300 hover:text-purple-200 hover:bg-purple-500/10 p-4 rounded-xl transition-all duration-300"
                      >
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <Languages className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-medium">
                          {showUrduTranslation ? "Hide Urdu Translation" : "View Urdu Translation"}
                        </span>
                        <ArrowRight
                          className={`w-5 h-5 transition-transform duration-300 ${showUrduTranslation ? "rotate-90" : ""}`}
                        />
                      </Button>

                      <AnimatePresence>
                        {showUrduTranslation && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 bg-white/5 p-6 rounded-xl border border-white/10"
                          >
                            <p
                              className="text-white text-lg leading-relaxed whitespace-pre-wrap"
                              dir="rtl"
                              lang="ur"
                              style={{ fontFamily: "Noto Nastaliq Urdu, serif" }}
                            >
                              {result.summary_urdu}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
